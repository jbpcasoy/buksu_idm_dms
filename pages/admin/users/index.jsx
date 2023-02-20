import frontendReadUsers from "@/services/frontend/admin/user/frontendReadUsers";
import AdminLayout from "@/views/admin/layout/AdminLayout";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let subscribe = true;

    frontendReadUsers(10, 1).then((res) => {
      setUsers(res);
    });

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <AdminLayout>
      <Box sx={{ m: 1 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users?.map((users) => (
                <TableRow
                  key={users.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>
                    <Avatar src={users.image} />
                  </TableCell>
                  <TableCell>{users.name}</TableCell>
                  <TableCell>{users.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
}
