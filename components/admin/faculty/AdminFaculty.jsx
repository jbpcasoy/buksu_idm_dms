import frontendCreateActiveFaculty from "@/services/frontend/admin/active_faculty/frontendCreateActiveFaculty";
import frontendDeleteActiveFaculty from "@/services/frontend/admin/active_faculty/frontendDeleteActiveFaculty";
import frontendDeleteFaculty from "@/services/frontend/faculty/frontendDeleteFaculty";
import AdminFacultyView from "@/views/admin/faculty/AdminFacultyView";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminFaculty({ faculty }) {
  const [facultyData, setFacultyData] = useState(faculty);
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  async function onDelete() {
    return frontendDeleteFaculty(faculty.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Faculty deleted successfully",
          variant: "success",
        });
        setFacultyData(null);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to delete faculty",
          variant: "error",
        });
      });
  }

  async function onActivate() {
    return frontendCreateActiveFaculty({
      facultyId: facultyData.id,
    })
      .then((res) => {
        enqueueSnackbar({
          message: "Faculty activated successfully",
          variant: "success",
        });
        setFacultyData((prev) => ({ ...prev, ActiveFaculty: res }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to activate faculty",
          variant: "error",
        });
      });
  }

  async function onDeactivate() {
    return frontendDeleteActiveFaculty(facultyData.ActiveFaculty.id)
      .then((res) => {
        enqueueSnackbar({
          message: "Faculty deactivated successfully",
          variant: "success",
        });
        setFacultyData((prev) => ({ ...prev, ActiveFaculty: null }));
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to deactivate faculty",
          variant: "error",
        });
      });
  }

  if (!facultyData) {
    return null;
  }

  return (
    <AdminFacultyView
      image={facultyData.user.image}
      name={facultyData.user.name}
      email={facultyData.user.email}
      departmentName={facultyData?.department?.name}
      collegeName={facultyData?.department?.college?.name}
      onDelete={onDelete}
      active={Boolean(facultyData.ActiveFaculty)}
      onActivate={onActivate}
      onDeactivate={onDeactivate}
    />
  );
}
