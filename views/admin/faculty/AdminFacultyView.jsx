import { Avatar, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminDeleteFacultyAlert from "./AdminDeleteFacultyAlert";
import AdminFacultyActionsMenu from "./AdminFacultyActionsMenu";

export default function AdminFacultyView({
  image,
  name,
  departmentName,
  collegeName,
  onDelete,
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
        <TableCell align='center'>
          <Avatar src={image} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{departmentName}</TableCell>
        <TableCell>{collegeName}</TableCell>
        <TableCell>
          <AdminFacultyActionsMenu onDelete={() => openDeleteDialog(true)} />
        </TableCell>
      </TableRow>
      <AdminDeleteFacultyAlert
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
