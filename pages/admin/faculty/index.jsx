import AdminFaculty from "@/components/admin/faculty/AdminFaculty";
import frontendReadFaculties from "@/services/frontend/admin/faculty/frontendReadFaculties";
import frontendCreateFaculty from "@/services/frontend/faculty/frontendCreateFaculty";
import AdminAddFacultyForm from "@/views/admin/faculty/AdminAddFacultyForm";
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
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useEffect, useState } from "react";

export default function AdminFacultyPage() {
  const [total, setTotal] = useState(0);
  const [faculties, setFaculties] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
    name: "",
    departmentName: "",
    collegeName: "",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadFaculties({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      departmentName: state.departmentName,
      collegeName: state.collegeName,
    }).then((res) => {
      if (!subscribe) return;

      setFaculties(res.data);
      setTotal(res.total);
    });
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

    return frontendCreateFaculty({ departmentId, userId });
  }

  function handleNameChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  function handleDepartmentNameChange(e) {
    setState((prev) => ({
      ...prev,
      departmentName: e.target.value,
    }));
  }
  const debouncedHandleDepartmentChange = _.debounce(
    handleDepartmentNameChange,
    800
  );

  function handleCollegeNameChange(e) {
    setState((prev) => ({
      ...prev,
      collegeName: e.target.value,
    }));
  }
  const debouncedHandleCollegeChange = _.debounce(handleCollegeNameChange, 800);

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant="h6">Faculties</Typography>

          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Tooltip title="Add">
              <IconButton onClick={() => openAddDialog(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>

        <Stack direction="row" spacing={1} sx={{ px: 2 }}>
          <TextField
            size="small"
            label="Name"
            onChange={debouncedHandleNameChange}
          />
          <TextField
            size="small"
            label="Department"
            onChange={debouncedHandleDepartmentChange}
          />
          <TextField
            size="small"
            label="College"
            onChange={debouncedHandleCollegeChange}
          />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>College</TableCell>
                <TableCell align="center">Active</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faculties.map((faculty) => (
                <AdminFaculty faculty={faculty} key={faculty.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
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
