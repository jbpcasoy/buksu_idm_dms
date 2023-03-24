import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import UserProfileFormView from "@/views/UserProfileFormView";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserProfile() {
  const { user, userLoading, userError } = useUser();
  const router = useRouter();

  return (
    <Layout>
      <UserProfileFormView
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
