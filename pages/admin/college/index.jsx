import AdminCollege from "@/components/admin/college/AdminCollege";
import frontendCreateCollege from "@/services/frontend/admin/college/frontendCreateCollege";
import frontendReadColleges from "@/services/frontend/admin/college/frontendReadColleges";
import AdminAddCollegeForm from "@/views/admin/college/AdminAddCollegeForm";
import AdminLayout from "@/views/admin/layout/AdminLayout";
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
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminCollegePage() {
  const [colleges, setColleges] = useState([]);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    openNewCollege: false,
    limit: 5,
    page: 0,
  });
  const router = useRouter();

  useEffect(() => {
    console.log({ colleges });
  }, [colleges]);

  useEffect(() => {
    let subscribe = true;

    frontendReadColleges(state.limit, state.page + 1).then((res) => {
      if (!subscribe) return;

      setColleges(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

  function reloadColleges(limit, page) {
    frontendReadColleges(limit, page).then((res) => {
      setColleges(res);
    });
  }

  function openAddDialog(open) {
    return setState((prev) => ({ ...prev, openNewCollege: open }));
  }

  async function onAdd({ name }) {
    return frontendCreateCollege({ name }).then((res) => {
      reloadColleges(10, 1);
    });
  }

  async function handleChangePage(_, page) {
    setState((prev) => ({ ...prev, page }));
  }
  async function handleChangeRowsPerPage(event) {
    setState((prev) => ({
      ...prev,
      limit: parseInt(event.target.value, 10),
      page: 0,
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
            sx={{ width: "100%" }}>
            <IconButton onClick={() => openAddDialog(true)}>
              <AddIcon />
            </IconButton>
          </Stack>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
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
          rowsPerPageOptions={[1, 5, 10, 25]}
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
        open={state.openNewCollege}
      />
    </AdminLayout>
  );
}
