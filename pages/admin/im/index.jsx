import AdminLayout from "@/components/admin/AdminLayout";
import AdminIM from "@/components/admin/im/AdminIM";
import IMStatuses from "@/services/constants/im_status";
import IMTypes from "@/services/constants/im_type";
import frontendReadIms from "@/services/frontend/admin/im";
import frontendUpdateIM from "@/services/frontend/im/frontendUpdateIM";
import AdminIMView from "@/views/admin/im/AdminIMView";
import Sort from "@/views/admin/Sort";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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
import { Stack } from "@mui/system";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminIMTable() {
  const router = useRouter();
  const [ims, setIms] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    serialNumber: "",
    title: "",
    departmentName: "",
    status: "All",
    sortColumn: "title",
    sortOrder: "asc",
    type: "All",
    peerReviewed: "All",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadIms({
      limit: state.limit,
      page: state.page + 1,
      serialNumber: state.serialNumber,
      title: state.title,
      departmentName: state.departmentName,
      status: state.status === "All" ? undefined : state.status,
      type: state.type === "All" ? undefined : state.type,
      peerReviewed:
        state.peerReviewed === "All" ? undefined : state.peerReviewed,
      sortOrder: state.sortOrder,
      sortColumn: state.sortColumn,
    }).then((res) => {
      if (!subscribe) return;
      setIms(res.data);
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

  function handleSerialNumberChange(e) {
    setState((prev) => ({
      ...prev,
      serialNumber: e.target.value,
    }));
  }
  const debouncedHandleSerialNumberChange = _.debounce(
    handleSerialNumberChange,
    800
  );
  function handleTitleChange(e) {
    setState((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }
  const debouncedHandleTitleChange = _.debounce(handleTitleChange, 800);

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

  function handleStatusChange(e) {
    setState((prev) => ({
      ...prev,
      status: e.target.value,
    }));
  }

  function handleTypeChange(e) {
    setState((prev) => ({
      ...prev,
      type: e.target.value,
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
          <Typography variant='h6'>IMs</Typography>
        </Toolbar>

        <Stack direction='row' spacing={1} sx={{ px: 2 }}>
          <TextField
            size='small'
            label='Serial Number'
            onChange={debouncedHandleSerialNumberChange}
          />
          <TextField
            size='small'
            label='Title'
            onChange={debouncedHandleTitleChange}
          />
          <FormControl size='small' sx={{ width: "auto" }}>
            <InputLabel>Type</InputLabel>
            <Select value={state.type} label='Type' onChange={handleTypeChange}>
              <MenuItem value='All'>All</MenuItem>
              {IMTypes.map((type) => (
                <MenuItem value={type} key={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            size='small'
            label='Department'
            onChange={debouncedHandleDepartmentChange}
          />
          <FormControl size='small' sx={{ width: "auto" }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={state.status}
              label='Status'
              onChange={handleStatusChange}
            >
              <MenuItem value='All'>All</MenuItem>
              {IMStatuses.map((status) => (
                <MenuItem value={status} key={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[
              { value: "serialNumber", label: "Serial Number" },
              { value: "title", label: "Title" },
              { value: "owner.user.name", label: "Owner" },
              { value: "owner.department.name", label: "Department" },
              { value: "owner.department.college.name", label: "College" },
              { value: "status", label: "Status" },
              { value: "createdAt", label: "Date Created" },
            ]}
            sortOrder={state.sortOrder}
          />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serial Number</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Authors</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align='center'>Peer Review</TableCell>
                <TableCell align='center'>Chairperson Review</TableCell>
                <TableCell align='center'>Coordinator Review</TableCell>
                <TableCell>Date Created</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ims.map((im) => (
                <AdminIM im={im} />
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
