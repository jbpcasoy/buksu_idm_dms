import AdminLayout from "@/components/admin/AdminLayout";
import AdminChairperson from "@/components/admin/chairperson/AdminChairperson";
import ExportButton from "@/components/admin/ExportButton";
import frontendCreateChairperson from "@/services/frontend/admin/chairperson/frontendCreateChairperson";
import frontendReadChairpersons from "@/services/frontend/admin/chairperson/frontendReadChairpersons";
import AdminAddChairpersonForm from "@/views/admin/chairperson/AdminAddChairpersonForm";
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

export default function AdminChairpersonPage() {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [chairpersons, setChairpersons] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    name: "",
    email: "",
    departmentName: "",
    collegeName: "",
    openAdd: false,
    active: null,
    sortColumn: "Faculty.user.name",
    sortOrder: "asc",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadChairpersons({
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
      setChairpersons(res.data);
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

  async function onAdd(value) {
    const { facultyId } = value;

    return frontendCreateChairperson({ facultyId })
      .then((res) => {
        enqueueSnackbar({
          message: "Chairperson added successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add chairperson",
          variant: "error",
        });
      });
  }

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
            <Typography variant='h6'>Chairpersons</Typography>
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
          <ExportButton link='/api/export/chairperson' />
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
              {chairpersons.map((chairperson) => (
                <AdminChairperson
                  chairperson={chairperson}
                  key={chairperson.id}
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
      <AdminAddChairpersonForm
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
      />
    </AdminLayout>
  );
}
