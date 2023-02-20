import AuthRequired from "@/components/auth/AuthRequired";
import ProfileFormView from "@/views/ProfileFormView";
import Layout from "@/views/layout/Layout";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

export default function Me() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <AuthRequired>
      <Layout>
        <div>
          {session?.user?.name && (
            <ProfileFormView
              onSubmit={(profile) => {
                axios
                  .patch(`/api/profile/${session.user.id}`, profile)
                  .then(() => {
                    signOut();
                  });
              }}
              defaultName={session?.user?.name}
            />
          )}
        </div>
      </Layout>
    </AuthRequired>
  );
}
