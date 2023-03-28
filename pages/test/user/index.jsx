import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import UserProfileView from "@/views/UserProfileView";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserProfile() {
  const { user, userLoading, userError } = useUser();
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
