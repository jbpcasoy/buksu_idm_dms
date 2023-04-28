import frontendCreateActiveDean from "@/services/frontend/active_admin/frontendCreateActiveDean";
import frontendDeleteActiveDean from "@/services/frontend/active_admin/frontendDeleteActiveDean";
import frontendDeleteDean from "@/services/frontend/dean/frontendDeleteDean";
import AdminDeanView from "@/views/admin/dean/AdminDeanView";
import { useState } from "react";

export default function AdminDean({ dean }) {
  const [deanData, setDeanData] = useState(dean);

  async function onDelete() {
    return frontendDeleteDean(dean.id).then((res) => {
      setDeanData(null);
    });
  }

  async function onActivate() {
    try {
      return frontendCreateActiveDean({
        deanId: deanData.id,
      }).then((res) => {
        setDeanData((prev) => ({ ...prev, ActiveDean: res }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveDean(deanData.ActiveDean.id).then((res) => {
      setDeanData((prev) => ({ ...prev, ActiveDean: null }));
    });
  }

  if (!deanData) {
    return null;
  }

  return (
    <AdminDeanView
      image={deanData?.Faculty?.user?.image}
      name={deanData?.Faculty?.user?.name}
      email={deanData?.Faculty?.user.email}
      departmentName={deanData?.Faculty?.department?.name}
      collegeName={deanData?.Faculty?.department?.college?.name}
      onDelete={onDelete}
      active={Boolean(deanData?.ActiveDean)}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
