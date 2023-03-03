import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import ProfileFormView from "@/views/ProfileFormView";
import axios from "axios";
import { useRouter } from "next/router";

export default function Me() {
  const { user, userLoading, userError } = useUser();
  const router = useRouter();

  return (
    <Layout>
      <ProfileFormView
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
