import frontendDeleteDepartment from "@/services/frontend/admin/department/frontendDeleteDepartment";
import frontendUpdateDepartment from "@/services/frontend/admin/department/frontendUpdateDepartment";
import AdminDepartmentView from "@/views/admin/department/AdminDepartmentView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminDepartment({ department }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [departmentData, setDepartmentData] = useState(department);

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateDepartment(departmentData.id, { name })
      .then((res) => {
        enqueueSnackbar({
          message: "Department updated successfully",
          variant: "success",
        });
        setDepartmentData(res);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to update department",
          variant: "error",
        });
      });
  }

  async function onDelete() {
    return frontendDeleteDepartment(departmentData.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Department deleted successfully",
          variant: "success",
        });
        setDepartmentData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to delete department",
          variant: "error",
        });
      });
  }

  if (!departmentData) {
    return null;
  }

  return (
    <AdminDepartmentView
      name={departmentData.name}
      college={departmentData.college.name}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}
