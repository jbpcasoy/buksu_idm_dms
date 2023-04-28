import frontendCreateActiveIMDCoordinator from "@/services/frontend/active_imd_coordinator/frontendCreateActiveIMDCoordinator";
import frontendDeleteActiveIMDCoordinator from "@/services/frontend/active_imd_coordinator/frontendDeleteActiveIMDCoordinator";
import frontendDeleteIMDCoordinator from "@/services/frontend/imd_coordinator/frontendDeleteIMDCoordinator";
import AdminIMDCoordinatorView from "@/views/admin/imd_coordinator/AdminIMDCoordinatorView";
import { useState } from "react";

export default function AdminIMDCoordinator({ iMDCoordinator }) {
  const [iMDCoordinatorData, setIMDCoordinatorData] = useState(iMDCoordinator);

  async function onDelete() {
    return frontendDeleteIMDCoordinator(iMDCoordinator.id).then((res) => {
      setIMDCoordinatorData(null);
    });
  }

  async function onActivate() {
    try {
      return frontendCreateActiveIMDCoordinator({
        iMDCoordinatorId: iMDCoordinatorData.id,
      }).then((res) => {
        setIMDCoordinatorData((prev) => ({
          ...prev,
          ActiveIMDCoordinator: res,
        }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveIMDCoordinator(
      iMDCoordinatorData.ActiveIMDCoordinator.id
    ).then((res) => {
      setIMDCoordinatorData((prev) => ({
        ...prev,
        ActiveIMDCoordinator: null,
      }));
    });
  }

  if (!iMDCoordinatorData) {
    return null;
  }

  return (
    <AdminIMDCoordinatorView
      image={iMDCoordinatorData.User.image}
      name={iMDCoordinatorData.User.name}
      email={iMDCoordinatorData.User.email}
      onDelete={onDelete}
      active={Boolean(iMDCoordinatorData.ActiveIMDCoordinator)}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
