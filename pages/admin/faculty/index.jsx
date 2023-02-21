import frontendReadFaculties from "@/services/frontend/admin/faculty/frontendReadFaculties";
import frontCreateFaculty from "@/services/frontend/faculty/frontCreateFaculty";
import AdminAddFacultyForm from "@/views/admin/faculty/AdminAddFacultyForm";
import AdminFacultyView from "@/views/admin/faculty/AdminFacultyView";
import AdminLayout from "@/views/admin/layout/AdminLayout";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function AdminFacultyPage() {
  const [total, setTotal] = useState(0);
  const [faculties, setFaculties] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadFaculties({ limit: state.limit, page: state.page + 1 }).then(
      (res) => {
        if (!subscribe) return;

        setFaculties(res.data);
        setTotal(res.total);
      }
    );
    return () => {
      subscribe = false;
    };
  }, [state]);

  useEffect(() => {
    console.log({ faculties });
  }, [faculties]);

  function handleChangePage(_, page) {
    setState((prev) => ({ ...prev, page }));
  }

  function handleChangeRowsPerPage(event) {
    setState((prev) => ({
      ...prev,
      limit: parseInt(event.target.value, 10),
      page: 0,
    }));
  }

  function openAddDialog(open) {
    setState((prev) => ({ ...prev, openAdd: open }));
  }

  async function onAdd(value) {
    const { departmentId, userId } = value;

    return frontCreateFaculty({ departmentId, userId });
  }

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Faculties</Typography>

          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            sx={{ width: "100%" }}>
            <Tooltip title='Add'>
              <IconButton onClick={() => openAddDialog(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>College</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faculties.map((faculty) => (
                <AdminFacultyView
                  image={faculty.user.image}
                  name={faculty.user.name}
                  departmentName={faculty?.department?.name}
                  collegeName={faculty?.department?.college?.name}
                  key={faculty.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={total}
          rowsPerPage={state.limit}
          page={state.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <AdminAddFacultyForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
