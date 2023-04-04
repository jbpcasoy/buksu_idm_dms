import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Chip, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminDeleteIMDCoordinatorAlert from "./AdminDeleteIMDCoordinatorAlert";
import AdminIMDCoordinatorActionsMenu from "./AdminIMDCoordinatorActionsMenu";

export default function AdminIMDCoordinatorView({
  image,
  name,
  active,
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
          <AdminIMDCoordinatorActionsMenu
            onDelete={() => openDeleteDialog(true)}
            active={active}
            onActivate={onActivate}
            onDeactivate={onDeactivate}
          />
        </TableCell>
      </TableRow>
      <AdminDeleteIMDCoordinatorAlert
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
