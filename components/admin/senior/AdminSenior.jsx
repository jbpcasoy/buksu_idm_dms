import frontendCreateActiveSenior from "@/services/frontend/admin/active_senior/frontendCreateActiveSenior";
import frontendDeleteActiveSenior from "@/services/frontend/admin/active_senior/frontendDeleteActiveSenior";
import frontendDeleteSenior from "@/services/frontend/admin/senior/frontendDeleteSenior";
import AdminSeniorView from "@/views/admin/senior/AdminSeniorView";
import { useState } from "react";

export default function AdminSenior({ senior }) {
  const [seniorData, setSeniorData] = useState(senior);

  async function onDelete() {
    const res = await frontendDeleteSenior(senior.id);
    setSeniorData(null);
  }

  async function onActivate() {
    try {
      return frontendCreateActiveSenior({
        seniorId: seniorData.id,
        departmentId: seniorData.Faculty.department.id,
      }).then((res) => {
        setSeniorData((prev) => ({ ...prev, ActiveSenior: res }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveSenior(seniorData.ActiveSenior.id).then(
      (res) => {
        setSeniorData((prev) => ({ ...prev, ActiveSenior: null }));
      }
    );
  }

  if (!seniorData) {
    return null;
  }

  return (
    <AdminSeniorView
      image={seniorData.Faculty.user.image}
      name={seniorData.Faculty.user.name}
      department={seniorData.Faculty.department.name}
      college={seniorData.Faculty.department.college.name}
      active={Boolean(seniorData.ActiveSenior)}
      onDelete={onDelete}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
