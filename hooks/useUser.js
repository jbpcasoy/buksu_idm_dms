import frontendReadUser from "@/services/frontend/user/frontendReadUser";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useUser() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    if (!session) return;
    let isSubscribed = true;

    frontendReadUser(session.user.id)
      .then((res) => {
        if (!isSubscribed) return;
        setUser(res);
        setUserLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setUserError(err);
        setUserLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [session]);

  return { user, userLoading, userError };
}
