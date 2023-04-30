import frontendCreateActiveDean from "@/services/frontend/active_admin/frontendCreateActiveDean";
import frontendDeleteActiveDean from "@/services/frontend/active_admin/frontendDeleteActiveDean";
import frontendDeleteDean from "@/services/frontend/dean/frontendDeleteDean";
import AdminDeanView from "@/views/admin/dean/AdminDeanView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminDean({ dean }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [deanData, setDeanData] = useState(dean);

  async function onDelete() {
    return frontendDeleteDean(dean.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Dean deleted successfully",
          variant: "success",
        });
        setDeanData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to delete dean",
          variant: "error",
        });
      });
  }

  async function onActivate() {
    return frontendCreateActiveDean({
      deanId: deanData.id,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "Dean activated successfully",
          variant: "success",
        });
        setDeanData((prev) => ({ ...prev, ActiveDean: res }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to activate dean",
          variant: "error",
        });
      });
  }

  async function onDeactivate() {
    return frontendDeleteActiveDean(deanData.ActiveDean.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Dean activated successfully",
          variant: "success",
        });
        setDeanData((prev) => ({ ...prev, ActiveDean: null }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to activate dean",
          variant: "error",
        });
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
