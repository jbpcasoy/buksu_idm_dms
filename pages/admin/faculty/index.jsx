import AdminLayout from "@/components/admin/AdminLayout";
import ExportButton from "@/components/admin/ExportButton";
import AdminFaculty from "@/components/admin/faculty/AdminFaculty";
import frontendReadFaculties from "@/services/frontend/admin/faculty/frontendReadFaculties";
import frontendCreateFaculty from "@/services/frontend/faculty/frontendCreateFaculty";
import AdminAddFacultyForm from "@/views/admin/faculty/AdminAddFacultyForm";
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

export default function AdminFacultyPage() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [total, setTotal] = useState(0);
  const [faculties, setFaculties] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
    name: "",
    email: "",
    departmentName: "",
    collegeName: "",
    sortColumn: "user.name",
    sortOrder: "asc",
    active: null,
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadFaculties({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      email: state.email,
      active: state.active,
      departmentName: state.departmentName,
      collegeName: state.collegeName,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
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

    return frontendCreateFaculty({ departmentId, userId })
      .then((res) => {
        enqueueSnackbar({
          message: "Added faculty successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add faculty",
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
            <Typography variant='h6'>Faculties</Typography>
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
              { value: "user.name", label: "Name" },
              { value: "user.email", label: "Email" },
              { value: "department.name", label: "Department" },
              { value: "department.college.name", label: "College" },
            ]}
            sortOrder={state.sortOrder}
          />
          <ExportButton link='/api/export/faculty' />
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
              {faculties.map((faculty) => (
                <AdminFaculty faculty={faculty} key={faculty.id} />
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
