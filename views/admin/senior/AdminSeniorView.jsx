import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Chip, TableCell, TableRow } from "@mui/material";
import AdminSeniorActionsMenu from "./AdminSeniorActionsMenu";

export default function AdminSeniorView({
  image,
  name,
  department,
  college,
  active,
  onDelete,
  onActivate,
  onDeactivate,
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
      <TableCell align='center'>
        <AdminSeniorActionsMenu
          active={active}
          onActivate={onActivate}
          onDeactivate={onDeactivate}
          onDelete={onDelete}
        />
      </TableCell>
    </TableRow>
  );
}
