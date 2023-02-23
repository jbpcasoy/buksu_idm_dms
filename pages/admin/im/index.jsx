import IMStatuses from "@/services/constants/im_status";
import frontendReadIms from "@/services/frontend/admin/im";
import AdminIMView from "@/views/admin/im/AdminIMView";
import AdminLayout from "@/views/admin/layout/AdminLayout";
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
import { useEffect, useState } from "react";

export default function AdminIM() {
  const [ims, setIms] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    serialNumber: "",
    title: "",
    departmentName: "",
    status: "All",
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
              onChange={handleStatusChange}>
              <MenuItem value='All'>All</MenuItem>
              {IMStatuses.map((status) => (
                <MenuItem value={status}>{status}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serial Number</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Owner</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ims.map((im) => (
                <AdminIMView
                  serialNumber={im.serialNumber}
                  title={im.title}
                  owner={im.owner.user.name}
                  department={im.owner.department.name}
                  status={im.status}
                  dateCreated={im.createdAt}
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
    </AdminLayout>
  );
}
