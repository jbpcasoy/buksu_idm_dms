import frontendUpdateUser from "@/services/frontend/user/frontendUpdateUser";
import AdminUserView from "@/views/admin/user/AdminUser";
import React, { useState } from "react";

export default function AdminUser({ user }) {
  const [userData, setUserData] = useState(user);

  async function onEdit(values) {
    const { name } = values;

    return frontendUpdateUser(user.id, { name }).then((res) => {
      setUserData(res);
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
