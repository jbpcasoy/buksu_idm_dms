import AdminLayout from "@/components/admin/AdminLayout";
import AdminCollege from "@/components/admin/college/AdminCollege";
import frontendCreateCollege from "@/services/frontend/admin/college/frontendCreateCollege";
import frontendReadColleges from "@/services/frontend/admin/college/frontendReadColleges";
import AdminAddCollegeForm from "@/views/admin/college/AdminAddCollegeForm";
import Sort from "@/views/admin/Sort";
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminCollegePage() {
  const [colleges, setColleges] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    openAddCollege: false,
    limit: 5,
    page: 0,
    name: "",
    sortOrder: "asc",
    sortColumn: "name",
  });
  const router = useRouter();

  useEffect(() => {
    console.log({ colleges });
  }, [colleges]);

  useEffect(() => {
    let subscribe = true;

    frontendReadColleges({
      limit: state.limit,
      page: state.page + 1,
      name: state.name,
      sortOrder: state.sortOrder,
      sortColumn: state.sortColumn,
    }).then((res) => {
      if (!subscribe) return;

      setColleges(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

  function reloadColleges() {
    setState((prev) => ({ ...prev }));
  }

  function openAddDialog(open) {
    return setState((prev) => ({ ...prev, openAddCollege: open }));
  }

  async function onAdd({ name }) {
    return frontendCreateCollege({ name }).then((res) => {
      reloadColleges();
    });
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

  function handleInputChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleInputChange = _.debounce(handleInputChange, 800);

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
          <Typography variant='h6'>Colleges</Typography>

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
            onChange={debouncedHandleInputChange}
          />
          <Sort
            onChangeSortColumn={handleSortByChange}
            onChangeSortOrder={handleSortOrderChange}
            sortColumn={state.sortColumn}
            sortOptions={[{ value: "name", label: "Name" }]}
            sortOrder={state.sortOrder}
          />
        </Stack>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center' width={100}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {colleges?.map((college) => (
                <AdminCollege college={college} key={college.id} />
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
      <AdminAddCollegeForm
        onClose={() => openAddDialog(false)}
        onSubmit={onAdd}
        open={state.openAddCollege}
      />
    </AdminLayout>
  );
}
