import frontendCreateActiveIMDCoordinator from "@/services/frontend/active_imd_coordinator/frontendCreateActiveIMDCoordinator";
import frontendDeleteActiveIMDCoordinator from "@/services/frontend/active_imd_coordinator/frontendDeleteActiveIMDCoordinator";
import frontendDeleteIMDCoordinator from "@/services/frontend/imd_coordinator/frontendDeleteIMDCoordinator";
import AdminIMDCoordinatorView from "@/views/admin/imd_coordinator/AdminIMDCoordinatorView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminIMDCoordinator({ iMDCoordinator }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [iMDCoordinatorData, setIMDCoordinatorData] = useState(iMDCoordinator);

  async function onDelete() {
    return frontendDeleteIMDCoordinator(iMDCoordinator.id)
      .then((res) => {
        enqueueSnackbar({
          message: "IMD Coordinator deleted successfully",
          variant: "success",
        });
        setIMDCoordinatorData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to delete IMD Coordinator",
          variant: "error",
        });
      });
  }

  async function onActivate() {
    return frontendCreateActiveIMDCoordinator({
      iMDCoordinatorId: iMDCoordinatorData.id,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "IMD Coordinator activated successfully",
          variant: "success",
        });
        setIMDCoordinatorData((prev) => ({
          ...prev,
          ActiveIMDCoordinator: res,
        }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to activate IMD Coordinator",
          variant: "error",
        });
      });
  }

  async function onDeactivate() {
    return frontendDeleteActiveIMDCoordinator(
      iMDCoordinatorData.ActiveIMDCoordinator.id
    )
      .then((res) => {
        enqueueSnackbar({
          message: "IMD Coordinator deactivated successfully",
          variant: "success",
        });
        setIMDCoordinatorData((prev) => ({
          ...prev,
          ActiveIMDCoordinator: null,
        }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ??
            "Failed to deactivate IMD Coordinator",
          variant: "error",
        });
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
