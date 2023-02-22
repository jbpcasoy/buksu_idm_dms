import frontendDeleteCollege from "@/services/frontend/admin/college/frontendDeleteCollege";
import frontendUpdateCollege from "@/services/frontend/admin/college/frontendUpdateCollege";
import frontendCreateDepartment from "@/services/frontend/admin/department/frontendCreateDepartment";
import AdminCollegeView from "@/views/admin/college/AdminCollegeView";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminCollege({ college }) {
  const router = useRouter();
  const [collegeData, setCollegeData] = useState(college);

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateCollege(collegeData.id, { name }).then((res) => {
      setCollegeData(res);
    });
  }

  async function onDelete() {
    return frontendDeleteCollege(collegeData.id).then((res) => {
      setCollegeData(null);
    });
  }

  async function onAdd(values) {
    const { name, collegeId } = values;
    return frontendCreateDepartment({ name, collegeId });
  }

  if (!collegeData) {
    return null;
  }

  return (
    <AdminCollegeView
      id={college.id}
      name={collegeData.name}
      key={collegeData.id}
      onEdit={onEdit}
      onDelete={onDelete}
      onAdd={onAdd}
    />
  );
}
