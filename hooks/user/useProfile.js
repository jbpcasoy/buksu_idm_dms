import frontendReadUser from "@/services/frontend/user/frontendReadUser";
import { useEffect, useState } from "react";

export default function useProfile(id) {
  const [profile, setProfile] = useState();
  const [profileError, setProfileError] = useState();
  const [profileLoading, setProfileLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    let subscribe = true;
    setProfileLoading(true);

    frontendReadUser(id)
      .then((res) => {
        if (!subscribe) return;
        setProfile(res);
      })
      .catch((err) => {
        setProfileError(err);
      })
      .finally(() => {
        setProfileLoading(true);
      });

    return () => {
      subscribe = false;
    };
  }, [id]);

  return {
    profile,
    profileError,
    profileLoading,
  };
}
