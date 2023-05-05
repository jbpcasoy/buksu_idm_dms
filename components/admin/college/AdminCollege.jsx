import frontendDeleteCollege from "@/services/frontend/admin/college/frontendDeleteCollege";
import frontendUpdateCollege from "@/services/frontend/admin/college/frontendUpdateCollege";
import frontendCreateDepartment from "@/services/frontend/admin/department/frontendCreateDepartment";
import AdminCollegeView from "@/views/admin/college/AdminCollegeView";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function AdminCollege({ college }) {
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [collegeData, setCollegeData] = useState(college);

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateCollege(collegeData.id, { name })
      .then((res) => {
        enqueueSnackbar({
          message: "College updated successfully",
          variant: "success",
        });
        setCollegeData(res);
      })
      .catch((err) => {
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to update college",
          variant: "error",
        });
      });
  }

  async function onDelete() {
    return frontendDeleteCollege(collegeData.id)
      .then((res) => {
        enqueueSnackbar({
          message: "College deleted successfully",
          variant: "success",
        });
        setCollegeData(null);
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to delete college",
          variant: "error",
        });
      });
  }

  async function onAdd(values) {
    const { name, collegeId } = values;
    return frontendCreateDepartment({ name, collegeId })
      .then((res) => {
        enqueueSnackbar({
          message: "Department added successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar({
          message: err?.response?.data?.error ?? "Failed to add department",
          variant: "error",
        });
      });
  }

  if (!collegeData) {
    return null;
  }

  return (
    <AdminCollegeView
      id={college.id}
      name={collegeData.name}
      key={collegeData.id}
      onEdit={onEdit}
      onDelete={onDelete}
      onAdd={onAdd}
    />
  );
}
