import frontendCreateActiveCITLDirector from "@/services/frontend/active_citl_director/frontendCreateActiveCITLDirector";
import frontendDeleteActiveCITLDirector from "@/services/frontend/active_citl_director/frontendDeleteActiveCITLDirector";
import frontendDeleteCITLDirector from "@/services/frontend/citl_director/frontendDeleteCITLDirector";
import AdminCITLDirectorView from "@/views/admin/citl_director/AdminCITLDirectorView";
import { useState } from "react";

export default function AdminCITLDirector({ cITLDirector }) {
  const [cITLDirectorData, setCITLDirectorData] = useState(cITLDirector);

  async function onDelete() {
    return frontendDeleteCITLDirector(cITLDirector.id).then((res) => {
      setCITLDirectorData(null);
    });
  }

  async function onActivate() {
    try {
      return frontendCreateActiveCITLDirector({
        cITLDirectorId: cITLDirectorData.id,
      }).then((res) => {
        setCITLDirectorData((prev) => ({
          ...prev,
          ActiveCITLDirector: res,
        }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveCITLDirector(
      cITLDirectorData.ActiveCITLDirector.id
    ).then((res) => {
      setCITLDirectorData((prev) => ({
        ...prev,
        ActiveCITLDirector: null,
      }));
    });
  }

  if (!cITLDirectorData) {
    return null;
  }

  return (
    <AdminCITLDirectorView
      image={cITLDirectorData.User.image}
      name={cITLDirectorData.User.name}
      onDelete={onDelete}
      active={Boolean(cITLDirectorData.ActiveCITLDirector)}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
