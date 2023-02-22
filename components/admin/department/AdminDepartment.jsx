import frontendDeleteDepartment from "@/services/frontend/admin/department/frontendDeleteDepartment";
import frontendUpdateDepartment from "@/services/frontend/admin/department/frontendUpdateDepartment";
import AdminDepartmentView from "@/views/admin/department/AdminDepartmentView";
import { useState } from "react";

export default function AdminDepartment({ department }) {
  const [departmentData, setDepartmentData] = useState(department);

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateDepartment(departmentData.id, { name }).then((res) => {
      setDepartmentData(res);
    });
  }

  async function onDelete() {
    return frontendDeleteDepartment(departmentData.id).then((res) => {
      setDepartmentData(null);
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
