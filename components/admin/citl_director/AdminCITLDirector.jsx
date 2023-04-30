import frontendCreateActiveCITLDirector from "@/services/frontend/active_citl_director/frontendCreateActiveCITLDirector";
import frontendDeleteActiveCITLDirector from "@/services/frontend/active_citl_director/frontendDeleteActiveCITLDirector";
import frontendDeleteCITLDirector from "@/services/frontend/citl_director/frontendDeleteCITLDirector";
import AdminCITLDirectorView from "@/views/admin/citl_director/AdminCITLDirectorView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminCITLDirector({ cITLDirector }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [cITLDirectorData, setCITLDirectorData] = useState(cITLDirector);

  async function onDelete() {
    return frontendDeleteCITLDirector(cITLDirector.id)
      .then((res) => {
        enqueueSnackbar({
          message: "CITL Director deleted successfully",
          variant: "success",
        });
        setCITLDirectorData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to delete CITL Director",
          variant: "error",
        });
      });
  }

  async function onActivate() {
    return frontendCreateActiveCITLDirector({
      cITLDirectorId: cITLDirectorData.id,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "CITL Director activated successfully",
          variant: "success",
        });
        setCITLDirectorData((prev) => ({
          ...prev,
          ActiveCITLDirector: res,
        }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to activate CITL Director",
          variant: "error",
        });
      });
  }

  async function onDeactivate() {
    return frontendDeleteActiveCITLDirector(
      cITLDirectorData.ActiveCITLDirector.id
    )
      .then((res) => {
        enqueueSnackbar({
          message: "CITL Director deactivated successfully",
          variant: "success",
        });
        setCITLDirectorData((prev) => ({
          ...prev,
          ActiveCITLDirector: null,
        }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to deactivate CITL Director",
          variant: "error",
        });
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
      email={cITLDirectorData.User.email}
      active={Boolean(cITLDirectorData.ActiveCITLDirector)}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
