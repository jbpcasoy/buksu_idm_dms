import AdminLayout from "@/components/admin/AdminLayout";
import frontendReadUsers from "@/services/frontend/admin/user/frontendReadUsers";
import Sort from "@/views/admin/Sort";
import {
  Avatar,
  Box,
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
  Typography,
} from "@mui/material";
import _ from "lodash";
import { useEffect, useState } from "react";

export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    name: "",
    email: "",
    sortColumn: "name",
    sortOrder: "asc",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadUsers({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      email: state.email,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    }).then((res) => {
      if (!subscribe) return;
      setUsers(res.data);
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

  function handleNameChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  function handleEmailChange(e) {
    setState((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }
  const debouncedHandleEmailChange = _.debounce(handleEmailChange, 800);

  function handleSortByChange(e) {
    setState((prev) => ({
      ...prev,
      sortColumn: e.target.value,
    }));
  }
  function handleSortOrderChange(e, value) {
    setState((prev) => ({
      ...prev,
      sortOrder: value,
    }));
  }

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Users</Typography>
        </Toolbar>
        <Stack direction='row' spacing={1} sx={{ px: 2 }}>
          <TextField
            size='small'
            label='Name'
            onChange={debouncedHandleNameChange}
          />
          <TextField
            size='small'
            label='Email'
            onChange={debouncedHandleEmailChange}
          />
          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "name", label: "Name" },
              { value: "email", label: "Email" },
            ]}
            sortOrder={state.sortOrder}
          />
        </Stack>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users?.map((users) => (
                <TableRow
                  key={users.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Avatar src={users.image} />
                  </TableCell>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.email}</TableCell>
                </TableRow>
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
    </AdminLayout>
  );
}
