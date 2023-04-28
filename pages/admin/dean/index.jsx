import AdminLayout from "@/components/admin/AdminLayout";
import AdminDean from "@/components/admin/dean/AdminDean";
import frontendCreateDean from "@/services/frontend/dean/frontendCreateDean";
import frontendReadDeans from "@/services/frontend/dean/frontendReadDeans";
import Sort from "@/views/admin/Sort";
import AdminAddDeanForm from "@/views/admin/dean/AdminAddDeanForm";
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
import { useEffect, useState } from "react";
import _ from "lodash";

export default function AdminDeanPage() {
  const [total, setTotal] = useState(0);
  const [deans, setDeans] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    openAdd: false,
    name: "",
    departmentName: "",
    collegeName: "",
    active: null,
    sortColumn: "Faculty.user.name",
    sortOrder: "asc",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadDeans({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      departmentName: state.departmentName,
      collegeName: state.collegeName,
      active: state.active,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
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

  async function onAdd(value) {
    const { facultyId } = value;

    return frontendCreateChairperson({ facultyId });
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

        <Stack direction='row' spacing={1} sx={{ px: 2 }}>
          <TextField
            size='small'
            label='Name'
            onChange={debouncedHandleNameChange}
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
                <TableCell>Department</TableCell>
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
