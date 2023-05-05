import AdminLayout from "@/components/admin/AdminLayout";
import AdminCoordinator from "@/components/admin/coordinator/AdminCoordinator";
import frontendCreateCoordinator from "@/services/frontend/admin/coordinator/frontendCreateCoordinator";
import frontendReadCoordinators from "@/services/frontend/admin/coordinator/frontendReadCoordinators";
import AdminAddCoordinatorForm from "@/views/admin/coordinator/AdminAddCoordinatorForm";
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
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

export default function AdminCoordinatorPage() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [coordinators, setCoordinators] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
    name: "",
    email: "",
    departmentName: "",
    collegeName: "",
    active: null,
    sortColumn: "Faculty.user.name",
    sortOrder: "asc",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadCoordinators({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      email: state.email,
      departmentName: state.departmentName,
      collegeName: state.collegeName,
      active: state.active,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    }).then((res) => {
      if (!subscribe) return;

      setCoordinators(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

  function openAddDialog(open) {
    setState((prev) => ({ ...prev, openAdd: open }));
  }

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

  async function onAdd(values) {
    const { facultyId } = values;

    return frontendCreateCoordinator({ facultyId })
      .then((res) => {
        enqueueSnackbar({
          message: "Successfully added coordinator",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add coordinator",
          variant: "error",
        });
      });
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

  function handleEmailChange(e) {
    setState((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  }
  const debouncedHandleEmailChange = _.debounce(handleEmailChange, 800);

  function handleCollegeNameChange(e) {
    setState((prev) => ({
      ...prev,
      collegeName: e.target.value,
    }));
  }
  const debouncedHandleCollegeChange = _.debounce(handleCollegeNameChange, 800);

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
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Typography variant='h6'>Coordinators</Typography>
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
          <TextField
            size='small'
            label='Department'
            onChange={debouncedHandleDepartmentChange}
          />
          <TextField
            size='small'
            label='College'
            onChange={debouncedHandleCollegeChange}
          />
          <ActiveFilter onChange={handleActiveChange} />

          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "Faculty.user.name", label: "Name" },
              { value: "Faculty.user.email", label: "Email" },
              { value: "Faculty.department.name", label: "Department" },
              { value: "Faculty.department.college.name", label: "College" },
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
                <TableCell>Department</TableCell>
                <TableCell>College</TableCell>
                <TableCell align='center'>Active</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coordinators.map((coordinator) => (
                <AdminCoordinator
                  coordinator={coordinator}
                  key={coordinator.id}
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
      <AdminAddCoordinatorForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
