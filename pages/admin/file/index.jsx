import frontendReadFiles from "@/services/frontend/admin/file/frontendReadFiles";
import AdminFileView from "@/views/admin/file/AdminFileView";
import AdminLayout from "@/views/admin/layout/AdminLayout";
import {
  Box,
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

export default function AdminFilePage() {
  const [total, setTotal] = useState(0);
  const [files, setFiles] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 0,
    fileName: "",
    originalFileName: "",
    iMSerialNumber: "",
  });

  useEffect(() => {
    let subscribe = true;

    frontendReadFiles({
      limit: state.limit,
      page: state.page + 1,
      fileName: state.fileName,
      originalFileName: state.originalFileName,
      iMSerialNumber: state.iMSerialNumber,
    }).then((res) => {
      if (!subscribe) return;

      setFiles(res.data);
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

  function handleFileNameChange(e) {
    setState((prev) => ({
      ...prev,
      fileName: e.target.value,
    }));
  }
  const debouncedHandleFileNameChange = _.debounce(handleFileNameChange, 800);

  function handleOriginalFileNameChange(e) {
    setState((prev) => ({
      ...prev,
      originalFileName: e.target.value,
    }));
  }
  const debouncedHandleOriginalFileNameChange = _.debounce(
    handleOriginalFileNameChange,
    800
  );

  function handleOriginalIMSerialNumberChange(e) {
    setState((prev) => ({
      ...prev,
      iMSerialNumber: e.target.value,
    }));
  }
  const debouncedHandleIMSerialNumberChange = _.debounce(
    handleOriginalIMSerialNumberChange,
    800
  );

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Files</Typography>
        </Toolbar>

        <Stack direction='row' spacing={1} sx={{ px: 2 }}>
          <TextField
            size='small'
            label='Filename'
            onChange={debouncedHandleFileNameChange}
          />
          <TextField
            size='small'
            label='Original Filename'
            onChange={debouncedHandleOriginalFileNameChange}
          />
          <TextField
            size='small'
            label='IM'
            onChange={debouncedHandleIMSerialNumberChange}
          />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Filename</TableCell>
                <TableCell>Original Filename</TableCell>
                <TableCell>IM</TableCell>
                <TableCell align='center'>Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {files.map((file) => {
                return (
                  <AdminFileView
                    originalFileName={file.originalFileName}
                    fileName={file.fileName}
                    iM={file.iM.serialNumber}
                    active={Boolean(file.ActiveFile)}
                    key={file.id}
                  />
                );
              })}
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
