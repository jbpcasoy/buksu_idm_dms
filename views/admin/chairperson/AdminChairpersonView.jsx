import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Chip, TableCell, TableRow } from "@mui/material";
import AdminChairpersonActionsMenu from "./AdminChairpersonActionsMenu";

export default function AdminChairpersonView({
  image,
  name,
  department,
  college,
  email,
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
      <TableCell>{email}</TableCell>
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
      <TableCell>
        <AdminChairpersonActionsMenu
          active={active}
          onDelete={onDelete}
          onActivate={onActivate}
          onDeactivate={onDeactivate}
        />
      </TableCell>
    </TableRow>
  );
}
