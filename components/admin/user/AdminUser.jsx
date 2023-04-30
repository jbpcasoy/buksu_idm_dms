import frontendUpdateUser from "@/services/frontend/user/frontendUpdateUser";
import AdminUserView from "@/views/admin/user/AdminUser";
import { useSnackbar } from "notistack";
import React, { useState } from "react";

export default function AdminUser({ user }) {
  const [userData, setUserData] = useState(user);
  const { closeSnackbar, enqueueSnackbar } = useSnackbar();

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateUser(user.id, { name })
      .then((res) => {
        setUserData(res);
        enqueueSnackbar({
          message: "User updated successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        enqueueSnackbar({
          message: "Failed to update user",
          variant: "error",
        });
      });
  }

  return (
    <AdminUserView
      name={userData.name}
      email={userData.email}
      image={userData.image}
      onEdit={onEdit}
    />
  );
}
