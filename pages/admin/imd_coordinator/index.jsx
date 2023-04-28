import AdminLayout from "@/components/admin/AdminLayout";
import AdminIMDCoordinator from "@/components/admin/imd_coordinator/AdminIMDCoordinator";
import frontendCreateIMDCoordinator from "@/services/frontend/imd_coordinator/frontendCreateIMDCoordinator";
import frontendReadIMDCoordinators from "@/services/frontend/imd_coordinator/frontendReadIMDCoordinators";
import AdminAddIMDCoordinatorForm from "@/views/admin/imd_coordinator/AdminAddIMDCoordinatorForm";
import Sort from "@/views/admin/Sort";
import ActiveFilter from "@/views/forms/ActiveFilter";
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

export default function AdminIMDCoordinatorPage() {
  const [total, setTotal] = useState(0);
  const [iMDCoordinators, setIMDCoordinators] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
    name: "",
    email: "",
    sortColumn: "User.name",
    sortOrder: "asc",
    active: null,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadIMDCoordinators({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      email: state.email,
      active: state.active,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    }).then((res) => {
      if (!subscribe) return;

      setIMDCoordinators(res.data);
      setTotal(res.total);
    });
    return () => {
      subscribe = false;
    };
  }, [state]);

  useEffect(() => {
    console.log({ iMDCoordinators });
  }, [iMDCoordinators]);

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
    const { userId } = value;

    return frontendCreateIMDCoordinator({ userId });
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

  function handleActiveChange(active) {
    setState((prev) => ({
      ...prev,
      active,
    }));
  }

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
          <Typography variant='h6'>IMD Coordinators</Typography>

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
          <ActiveFilter onChange={handleActiveChange} />

          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "User.name", label: "Name" },
              { value: "User.email", label: "Email" },
            ]}
            sortOrder={state.sortOrder}
          />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align='center'>Active</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {iMDCoordinators.map((iMDCoordinator) => (
                <AdminIMDCoordinator
                  iMDCoordinator={iMDCoordinator}
                  key={iMDCoordinator.id}
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
      <AdminAddIMDCoordinatorForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
