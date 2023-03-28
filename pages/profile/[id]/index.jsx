import Layout from "@/components/layout/Layout";
import useProfile from "@/hooks/user/useProfile";
import UserProfileView from "@/views/UserProfileView";
import { useRouter } from "next/router";

export default function UserProfile() {
  const router = useRouter();
  const { profile, profileError, profileLoading } = useProfile(
    router?.query?.id
  );

  return (
    <Layout>
      <UserProfileView profile={profile} />
    </Layout>
  );
}
