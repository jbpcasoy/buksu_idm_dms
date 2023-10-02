import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminDeleteDepartmentAlert from "./AdminDeleteDepartmentAlert";
import AdminDepartmentActionsMenu from "./AdminDepartmentActionsMenu";
import AdminDepartmentUpdateForm from "./AdminDepartmentUpdateForm";

export default function AdminDepartmentView({
  name,
  college,
  onEdit,
  onDelete,
}) {
  const [state, setState] = useState({
    openUpdate: false,
    openDelete: false,
  });

  function openUpdateDialog(open) {
    return setState((prev) => ({ ...prev, openUpdate: open }));
  }
  function openDeleteDialog(open) {
    return setState((prev) => ({ ...prev, openDelete: open }));
  }

  return (
    <>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{college}</TableCell>
        <TableCell align='center'>
          <AdminDepartmentActionsMenu
            onEdit={() => openUpdateDialog(true)}
            onDelete={() => openDeleteDialog(true)}
          />
        </TableCell>
      </TableRow>

      <AdminDepartmentUpdateForm
        initialValues={{
          name,
        }}
        open={state.openUpdate}
        onClose={() => openUpdateDialog(false)}
        onSubmit={(values) =>
          onEdit(values).then((res) => {
            openUpdateDialog(false);
          })
        }
      />
      <AdminDeleteDepartmentAlert
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
