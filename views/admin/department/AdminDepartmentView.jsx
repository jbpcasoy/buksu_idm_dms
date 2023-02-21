import { TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import AdminCollegeUpdateForm from "../college/AdminCollegeUpdateForm";
import AdminDepartmentActionsMenu from "./AdminDepartmentActionsMenu";

export default function AdminDepartmentView({ name, college, onEdit }) {
  const [state, setState] = useState({
    openUpdate: false,
  });

  function openUpdateDialog(open) {
    return setState((prev) => ({ ...prev, openUpdate: open }));
  }

  return (
    <>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{college}</TableCell>
        <TableCell align='center'>
          <AdminDepartmentActionsMenu onEdit={() => openUpdateDialog(true)} />
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
    </>
  );
}
