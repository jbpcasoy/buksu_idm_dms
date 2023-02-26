import frontendCreateActiveCoordinator from "@/services/frontend/admin/active_coordinator/frontendCreateActiveCoordinator";
import frontendDeleteActiveCoordinator from "@/services/frontend/admin/active_coordinator/frontendDeleteActiveCoordinator";
import frontendDeleteCoordinator from "@/services/frontend/admin/coordinator/frontendDeleteCoordinator";
import AdminCoordinatorView from "@/views/admin/coordinator/AdminCoordinatorView";
import { useState } from "react";

export default function AdminCoordinator({ coordinator }) {
  const [coordinatorData, setCoordinatorData] = useState(coordinator);

  async function onDelete() {
    return frontendDeleteCoordinator(coordinator.id).then((res) => {
      setCoordinatorData(null);
    });
  }

  async function onActivate() {
    try {
      return frontendCreateActiveCoordinator({
        facultyId: coordinatorData.Faculty.id,
        departmentId: coordinatorData.Faculty.department.id,
      }).then((res) => {
        setCoordinatorData((prev) => ({ ...prev, ActiveCoordinator: res }));
      });
    } catch (error) {
      throw error;
    }
  }

  async function onDeactivate() {
    return frontendDeleteActiveCoordinator(
      coordinatorData.ActiveCoordinator.id
    ).then((res) => {
      setCoordinatorData((prev) => ({ ...prev, ActiveCoordinator: null }));
    });
  }

  if (!coordinatorData) return null;

  return (
    <AdminCoordinatorView
      image={coordinatorData.Faculty.user.image}
      name={coordinatorData.Faculty.user.name}
      department={coordinatorData.Faculty.department.name}
      college={coordinatorData.Faculty.department.college.name}
      active={Boolean(coordinatorData.ActiveCoordinator)}
      onDelete={onDelete}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
