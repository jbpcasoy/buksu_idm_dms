import { TableCell, TableRow } from "@mui/material";
import moment from "moment";

export default function AdminIMView({
  serialNumber,
  title,
  department,
  owner,
  status,
  dateCreated,
}) {
  return (
    <TableRow>
      <TableCell>{serialNumber}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{owner}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{moment(dateCreated).format("lll")}</TableCell>
    </TableRow>
  );
}
