import { Stack, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminAddCollegeDepartmentForm from "./AdminAddCollegeDepartmentForm";
import AdminCollegeActionsMenu from "./AdminCollegeActionsMenu";
import AdminCollegeUpdateForm from "./AdminCollegeUpdateForm";
import AdminDeleteCollegeAlert from "./AdminDeleteCollegeAlert";

export default function AdminCollegeView({
  id,
  name,
  onEdit,
  onDelete,
  onAdd,
}) {
  const [state, setState] = useState({
    openUpdate: false,
    openDelete: false,
    openAdd: false,
  });

  function openUpdateDialog(open) {
    return setState((prev) => ({ ...prev, openUpdate: open }));
  }
  function openDeleteDialog(open) {
    return setState((prev) => ({ ...prev, openDelete: open }));
  }
  function openAddDialog(open) {
    return setState((prev) => ({ ...prev, openAdd: open }));
  }

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>{name}</TableCell>
        <TableCell align='center'>
          <Stack direction='row' justifyContent='center' alignItems='center'>
            <AdminCollegeActionsMenu
              onEdit={() => openUpdateDialog(true)}
              onDelete={() => openDeleteDialog(true)}
              onAdd={() => openAddDialog(true)}
            />
          </Stack>
        </TableCell>
      </TableRow>

      <AdminAddCollegeDepartmentForm
        collegeId={id}
        open={state.openAdd}
        onClose={() => openAddDialog(false)}
        onSubmit={(values) =>
          onAdd(values).then((res) => {
            openAddDialog(false);
          })
        }
      />

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
