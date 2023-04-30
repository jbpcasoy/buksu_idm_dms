import frontendCreateActiveChairperson from "@/services/frontend/admin/active_chairperson/frontendCreateActiveChairperson";
import frontendDeleteActiveChairperson from "@/services/frontend/admin/active_chairperson/frontendDeleteActiveChairperson";
import frontendDeleteChairperson from "@/services/frontend/admin/chairperson/frontendDeleteChairperson";
import AdminChairpersonView from "@/views/admin/chairperson/AdminChairpersonView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminChairperson({ chairperson }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [chairpersonData, setChairpersonData] = useState(chairperson);

  async function onDelete() {
    return frontendDeleteChairperson(chairperson.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Chairperson deleted successfully",
          variant: "success",
        });
        setChairpersonData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to delete chairperson",
          variant: "error",
        });
      });
  }

  async function onActivate() {
    return frontendCreateActiveChairperson({
      chairpersonId: chairpersonData.id,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "Chairperson activated successfully",
          variant: "success",
        });
        setChairpersonData((prev) => ({ ...prev, ActiveChairperson: res }));
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to activate chairperson",
          variant: "error",
        });
      });
  }

  async function onDeactivate() {
    return frontendDeleteActiveChairperson(chairpersonData.ActiveChairperson.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Chairperson deactivated successfully",
          variant: "success",
        });
        setChairpersonData((prev) => ({ ...prev, ActiveChairperson: null }));
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar({
          message:
            err?.response?.data?.error ?? "Failed to deactivate chairperson",
          variant: "error",
        });
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
