import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton, TableCell, TableRow } from "@mui/material";

export default function AdminFacultyView({
  image,
  name,
  departmentName,
  collegeName,
}) {
  return (
    <TableRow>
      <TableCell align='center'>
        <Avatar src={image} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{departmentName}</TableCell>
      <TableCell>{collegeName}</TableCell>
      <TableCell>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
