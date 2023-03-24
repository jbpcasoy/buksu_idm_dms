import frontendReadUser from "@/services/frontend/user/frontendReadUser";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      if (router.asPath !== "/") router.push("/");
    },
  });
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    if (!session) return;
    let isSubscribed = true;

    setUserLoading(true);

    frontendReadUser(session.user.id)
      .then((res) => {
        if (!isSubscribed) return;
        setUser(res);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setUserError(err);
      })
      .finally(() => {
        setUserLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [session]);

  useEffect(() => {
    if (user?.LoginRole?.Role === "UNAUTHORIZED") {
      signOut({
        callbackUrl: "/?unauthorized=true",
      });
    }
  }, [user]);

  return { user, userLoading, userError };
}
