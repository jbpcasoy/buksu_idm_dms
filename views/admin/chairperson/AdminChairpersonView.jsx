import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Chip, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminDeleteConfirmation from "../AdminDeleteConfirmation";
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
  const [state, setState] = useState({
    openDelete: false,
  });
  return (
    <>
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
            onDelete={() => setState((prev) => ({ ...prev, openDelete: true }))}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        </TableCell>
      </TableRow>

      <AdminDeleteConfirmation
        title='Delete Chairperson'
        message='This action cannot be undone, are you sure? If this chairperson have corresponding references, this will fail.'
        onAgree={onDelete}
        onClose={() => setState((prev) => ({ ...prev, openDelete: false }))}
        open={state.openDelete}
      />
    </>
  );
}
