import frontendCreateActiveCoordinator from "@/services/frontend/admin/active_coordinator/frontendCreateActiveCoordinator";
import frontendDeleteActiveCoordinator from "@/services/frontend/admin/active_coordinator/frontendDeleteActiveCoordinator";
import frontendDeleteCoordinator from "@/services/frontend/admin/coordinator/frontendDeleteCoordinator";
import AdminCoordinatorView from "@/views/admin/coordinator/AdminCoordinatorView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminCoordinator({ coordinator }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [coordinatorData, setCoordinatorData] = useState(coordinator);

  async function onDelete() {
    return frontendDeleteCoordinator(coordinator.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Successfully activated coordinator",
          variant: "success",
        });
        setCoordinatorData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to delete coordinator",
          variant: "error",
        });
      });
  }

  async function onActivate() {
    return frontendCreateActiveCoordinator({
      coordinatorId: coordinatorData.id,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "Successfully activated coordinator",
          variant: "success",
        });
        setCoordinatorData((prev) => ({ ...prev, ActiveCoordinator: res }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to activate coordinator",
          variant: "error",
        });
      });
  }

  async function onDeactivate() {
    return frontendDeleteActiveCoordinator(coordinatorData.ActiveCoordinator.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Successfully deactivated coordinator",
          variant: "success",
        });
        setCoordinatorData((prev) => ({ ...prev, ActiveCoordinator: null }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to deactivate coordinator",
          variant: "error",
        });
      });
  }

  if (!coordinatorData) return null;

  return (
    <AdminCoordinatorView
      image={coordinatorData.Faculty.user.image}
      name={coordinatorData.Faculty.user.name}
      email={coordinatorData.Faculty.user.email}
      department={coordinatorData.Faculty.department.name}
      college={coordinatorData.Faculty.department.college.name}
      active={Boolean(coordinatorData.ActiveCoordinator)}
      onDelete={onDelete}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
