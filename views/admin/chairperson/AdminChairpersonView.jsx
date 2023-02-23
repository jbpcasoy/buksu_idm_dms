import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Chip, TableCell, TableRow } from "@mui/material";

export default function AdminChairpersonView({
  image,
  name,
  department,
  college,
  active,
}) {
  return (
    <TableRow>
      <TableCell>
        <Avatar src={image} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{department}</TableCell>
      <TableCell>{college}</TableCell>
      <TableCell align='center'>
        {active && (
          <Chip
            label='Active'
            size='small'
            color='success'
            icon={<CheckIcon />}
          />
        )}
        {!active && (
          <Chip
            label='Inactive'
            size='small'
            color='error'
            icon={<CloseIcon />}
          />
        )}
      </TableCell>
    </TableRow>
  );
}
