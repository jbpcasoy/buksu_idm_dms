import frontendReadCoordinators from "@/services/frontend/admin/coordinator/frontendReadCoordinators";
import AdminCoordinatorView from "@/views/admin/coordinator/AdminCoordinatorView";
import AdminLayout from "@/views/admin/layout/AdminLayout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function AdminCoordinatorPage() {
  const [coordinators, setCoordinators] = useState([]);

  useEffect(() => {
    let subscribe = true;

    frontendReadCoordinators({ limit: 10, page: 1 }).then((res) => {
      if (!subscribe) return;

      setCoordinators(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <Toolbar>
          <Typography variant='h6'>Coordinators</Typography>

          {/* <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            spacing={2}
            sx={{ width: "100%" }}>
            <Tooltip title='Add'>
              <IconButton onClick={() => openAddDialog(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Stack> */}
        </Toolbar>
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
              {coordinators.map((coordinator) => (
                <AdminCoordinatorView
                  image={coordinator.Faculty.user.image}
                  name={coordinator.Faculty.user.name}
                  department={coordinator.Faculty.department.name}
                  college={coordinator.Faculty.department.college.name}
                  active={Boolean(coordinator.ActiveChairperson)}
                  key={coordinator.id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}
