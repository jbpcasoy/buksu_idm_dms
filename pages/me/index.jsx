import Layout from "@/components/layout/Layout";
import UserContext from "@/contexts/UserContext";
import ProfileFormView from "@/views/ProfileFormView";
import axios from "axios";
import { initModals } from "flowbite";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Me() {
  const { user, userLoading, userError } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    initModals();
  });

  return (
    <Layout>
      <ProfileFormView
        onSubmit={(profile) => {
          axios.put(`/api/user/${user.id}`, profile).then((res) => {
            router.reload();
          });
        }}
        defaultName={user?.name}
      />
    </Layout>
  );
}
