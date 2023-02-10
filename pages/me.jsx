import AuthRequired from "@/components/auth/AuthRequired";
import ProfileFormView from "@/views/ProfileFormView";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";

export default function me() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <AuthRequired>
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
    </AuthRequired>
  );
}
