import frontendCreateActiveChairperson from "@/services/frontend/admin/active_chairperson/frontendCreateActiveChairperson";
import frontendDeleteActiveChairperson from "@/services/frontend/admin/active_chairperson/frontendDeleteActiveChairperson";
import frontendDeleteChairperson from "@/services/frontend/admin/chairperson/frontendDeleteChairperson";
import AdminChairpersonView from "@/views/admin/chairperson/AdminChairpersonView";
import { useState } from "react";

export default function AdminChairperson({ chairperson }) {
  const [chairpersonData, setChairpersonData] = useState(chairperson);

  async function onDelete() {
    return frontendDeleteChairperson(chairperson.id).then((res) => {
      setChairpersonData(null);
    });
  }

  async function onActivate() {
    try {
      return frontendCreateActiveChairperson({
        chairpersonId: chairpersonData.id,
      }).then((res) => {
        setChairpersonData((prev) => ({ ...prev, ActiveChairperson: res }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveChairperson(
      chairpersonData.ActiveChairperson.id
    ).then((res) => {
      setChairpersonData((prev) => ({ ...prev, ActiveChairperson: null }));
    });
  }

  if (!chairpersonData) {
    return null;
  }

  return (
    <AdminChairpersonView
      image={chairpersonData.Faculty.user.image}
      name={chairpersonData.Faculty.user.name}
      email={chairpersonData.Faculty.user.email}
      department={chairpersonData.Faculty.department.name}
      college={chairpersonData.Faculty.department.college.name}
      active={Boolean(chairpersonData.ActiveChairperson)}
      onDelete={onDelete}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
