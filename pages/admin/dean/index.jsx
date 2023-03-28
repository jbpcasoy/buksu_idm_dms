import AdminLayout from "@/components/admin/AdminLayout";
import AdminDean from "@/components/admin/dean/AdminDean";
import frontendCreateDean from "@/services/frontend/dean/frontendCreateDean";
import frontendReadDeans from "@/services/frontend/dean/frontendReadDeans";
import AdminAddDeanForm from "@/views/admin/dean/AdminAddDeanForm";
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

export default function AdminDeanPage() {
  const [total, setTotal] = useState(0);
  const [deans, setDeans] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadDeans({
      limit: state.limit,
      page: state.page + 1,
    }).then((res) => {
      if (!subscribe) return;

      setDeans(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

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
    const { facultyId } = value;

    return frontendCreateDean({ facultyId });
  }

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Deans</Typography>

          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            sx={{ width: "100%" }}
          >
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
                <TableCell>College</TableCell>
                <TableCell align='center'>Active</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deans.map((dean) => (
                <AdminDean dean={dean} key={dean.id} />
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
      <AdminAddDeanForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
