import AdminDepartmentView from "@/views/admin/department/AdminDepartmentView";

export default function AdminDepartment({ department }) {
  return (
    <AdminDepartmentView
      name={department.name}
      college={department.college.name}
    />
  );
}
