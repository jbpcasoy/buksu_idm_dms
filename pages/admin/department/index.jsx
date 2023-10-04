import AdminLayout from "@/components/admin/AdminLayout";
import ExportButton from "@/components/admin/ExportButton";
import AdminDepartment from "@/components/admin/department/AdminDepartment";
import frontendCreateDepartment from "@/services/frontend/admin/department/frontendCreateDepartment";
import frontendReadDepartments from "@/services/frontend/admin/department/frontendReadDepartments";
import Sort from "@/views/admin/Sort";
import AdminAddDepartmentForm from "@/views/admin/department/AdminAddDepartmentForm";
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

export default function AdminDepartmentPage() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [departments, setDepartments] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    name: "",
    collegeName: "",
    sortColumn: "name",
    sortOrder: "asc",
    openAddDepartment: false,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadDepartments({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      collegeName: state.collegeName,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    }).then((res) => {
      if (!subscribe) return;

      setDepartments(res.data);
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
      page: 0,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  function handleCollegeNameChange(e) {
    setState((prev) => ({
      ...prev,
      collegeName: e.target.value,
      page: 0,
    }));
  }
  const debouncedHandleCollegeChange = _.debounce(handleCollegeNameChange, 800);

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

  function reloadDepartments() {
    setState((prev) => ({ ...prev }));
  }

  function openAddDialog(open) {
    return setState((prev) => ({ ...prev, openAddDepartment: open }));
  }

  async function onAdd({ name, collegeId }) {
    return frontendCreateDepartment({ name, collegeId })
      .then((res) => {
        enqueueSnackbar({
          message: "Added department successfully",
          variant: "success",
        });
        reloadDepartments();
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add department",
          variant: "error",
        });
      });
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
            <Typography variant='h6'>Departments</Typography>
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
            label='College'
            onChange={debouncedHandleCollegeChange}
          />

          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "name", label: "Name" },
              { value: "college.name", label: "College" },
            ]}
            sortOrder={state.sortOrder}
          />
          <ExportButton link='/api/export/department' />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>College</TableCell>
                <TableCell align='center'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((department) => (
                <AdminDepartment department={department} key={department.id} />
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

      <AdminAddDepartmentForm
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
        open={state.openAddDepartment}
      />
    </AdminLayout>
  );
}
