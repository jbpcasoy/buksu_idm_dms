import { Avatar, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminUserActionsMenu from "./AdminUserActionMenu";
import AdminUserUpdateForm from "./AdminUserUpdateForm";

export default function AdminUserView({ image, name, email, onEdit }) {
  const [state, setState] = useState({ openUpdate: false });

  function openUpdateDialog(open) {
    setState((prev) => ({ ...prev, openUpdate: open }));
  }

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>
          <Avatar src={image} />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>
          <AdminUserActionsMenu
            onEdit={() => {
              openUpdateDialog(true);
            }}
          />
        </TableCell>
      </TableRow>
      <AdminUserUpdateForm
        initialValues={{ name }}
        onClose={() => openUpdateDialog(false)}
        open={state.openUpdate}
        onSubmit={(values) =>
          onEdit(values).then((res) => {
            openUpdateDialog(false);
          })
        }
      />
    </>
  );
}
