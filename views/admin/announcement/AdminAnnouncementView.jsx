import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminDeleteConfirmation from "../AdminDeleteConfirmation";
import AdminAnnouncementActionsMenu from "./AdminAnnouncementActionsMenu";
import AdminAnnouncementUpdateForm from "./AdminAnnouncementUpdateForm";

export default function AdminAnnouncementView({
  title,
  description,
  link,
  onEdit,
  onDelete,
}) {
  const [state, setState] = useState({ openUpdate: false, openDelete: false });

  function openUpdateDialog(open) {
    setState((prev) => ({ ...prev, openUpdate: open }));
  }
  function openDeleteConfirmation(open) {
    setState((prev) => ({ ...prev, openDelete: open }));
  }

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{title}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{link}</TableCell>
        <TableCell>
          <AdminAnnouncementActionsMenu
            onEdit={() => {
              openUpdateDialog(true);
            }}
            onDelete={() => {
              openDeleteConfirmation(true);
            }}
          />
        </TableCell>
      </TableRow>
      <AdminAnnouncementUpdateForm
        initialValues={{ title, description, link }}
        onClose={() => openUpdateDialog(false)}
        open={state.openUpdate}
        onSubmit={(values) =>
          onEdit(values).then((res) => {
            openUpdateDialog(false);
          })
        }
      />
      <AdminDeleteConfirmation
        onAgree={onDelete}
        onClose={() => setState((prev) => ({ ...prev, openDelete: false }))}
        open={state.openDelete}
      />
    </>
  );
}
