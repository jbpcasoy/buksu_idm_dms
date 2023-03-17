import { TableCell, TableRow } from "@mui/material";

export default function AdminSuggestionItem({
  value,
  actionTaken,
  pageNumber,
  remarks,
}) {
  return (
    <TableRow>
      <TableCell>{value}</TableCell>
      <TableCell>{actionTaken}</TableCell>
      <TableCell>{pageNumber}</TableCell>
      <TableCell>{remarks}</TableCell>
    </TableRow>
  );
}
