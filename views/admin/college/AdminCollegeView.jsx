import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Stack, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminCollegeUpdateForm from "./AdminCollegeUpdateForm";
import AdminDeleteCollegeAlert from "./AdminDeleteCollegeAlert";

export default function AdminCollegeView({ name, onEdit, onDelete }) {
  const [state, setState] = useState({ openUpdate: false, openDelete: false });

  function openUpdateDialog(open) {
    return setState((prev) => ({ ...prev, openUpdate: open }));
  }
  function openDeleteDialog(open) {
    return setState((prev) => ({ ...prev, openDelete: open }));
  }

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{name}</TableCell>
        <TableCell align='center'>
          <Stack direction='row' justifyContent='flex-end' alignItems='center'>
            <IconButton onClick={() => openUpdateDialog(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => openDeleteDialog(true)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>

      <AdminCollegeUpdateForm
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
      <AdminDeleteCollegeAlert
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
