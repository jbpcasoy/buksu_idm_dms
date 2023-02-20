import frontendDeleteCollege from "@/services/frontend/admin/college/frontendDeleteCollege";
import frontendUpdateCollege from "@/services/frontend/admin/college/frontendUpdateCollege";
import AdminCollegeView from "@/views/admin/college/AdminCollegeView";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AdminCollege({ college }) {
  const router = useRouter();
  const [collegeData, setCollegeData] = useState(college);

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateCollege(collegeData.id, { name }).then((res) => {
      // router.reload();
      setCollegeData(res);
    });
  }

  async function onDelete() {
    return frontendDeleteCollege(collegeData.id).then((res) => {
      // router.reload();
      setCollegeData(null);
    });
  }

  if (!collegeData) {
    return null;
  }

  return (
    <AdminCollegeView
      name={collegeData.name}
      key={collegeData.id}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}
