import frontendReadNotifications from "@/services/frontend/notification/frontendReadNotifications";
import { useEffect, useState } from "react";

export default function useNotifications({ limit, page, userId }) {
  const [notifications, setNotifications] = useState([]);
  const [notificationsError, setNotificationsError] = useState();
  const [notificationsLoading, setNotificationsLoading] = useState(false);

  useEffect(() => {
    if (!limit || !page || !userId) return;
    setNotificationsLoading(true);

    let subscribe = true;
    frontendReadNotifications({ limit, page, userId })
      .then((res) => {
        if (!subscribe) return;
        setNotifications(res.data);
      })
      .catch((err) => {
        setNotificationsError(err);
      })
      .finally(() => {
        setNotificationsLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [limit, page, userId]);

  return {
    notifications,
    notificationsError,
    notificationsLoading,
  };
}
