import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Chip, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminCITLDirectorActionsMenu from "./AdminCITLDirectorActionsMenu";
import AdminDeleteCITLDirectorAlert from "./AdminDeleteCITLDirectorAlert";

export default function AdminCITLDirectorView({
  image,
  name,
  active,
  email,
  onDelete,
  onActivate,
  onDeactivate,
}) {
  const [state, setState] = useState({
    openDelete: false,
  });

  function openDeleteDialog(open) {
    return setState((prev) => ({ ...prev, openDelete: open }));
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <Avatar src={image} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{email}</TableCell>
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
          <AdminCITLDirectorActionsMenu
            onDelete={() => openDeleteDialog(true)}
            active={active}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        </TableCell>
      </TableRow>
      <AdminDeleteCITLDirectorAlert
        open={state.openDelete}
        onClose={() => openDeleteDialog(false)}
        onAgree={() => {
          onDelete().then(() => {
            openDeleteDialog(false);
          });
        }}
      />
    </>
  );
}
