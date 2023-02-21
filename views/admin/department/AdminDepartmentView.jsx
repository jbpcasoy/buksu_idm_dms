import { TableCell, TableRow } from "@mui/material";

export default function AdminDepartmentView({name, college}) {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{college}</TableCell>
    </TableRow>
  )
}
