import Layout from "@/components/layout/Layout";
import UserContext from "@/contexts/UserContext";
import UserProfileView from "@/views/UserProfileView";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function UserProfile() {
  const { user, userLoading, userError } = useContext(UserContext);
  const router = useRouter();

  return (
    <Layout>
      <UserProfileView
        onSubmit={(profile) => {
          axios.patch(`/api/profile/${user.id}`, profile).then((res) => {
            router.reload();
          });
        }}
        defaultName={user?.name}
      />
    </Layout>
  );
}
