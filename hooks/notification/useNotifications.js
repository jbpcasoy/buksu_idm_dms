import frontendReadNotifications from "@/services/frontend/notification/frontendReadNotifications";
import { useEffect, useState } from "react";

export default function useNotifications({
  limit,
  page,
  userId,
  facultyId,
  read,
}) {
  const [notifications, setNotifications] = useState([]);
  const [notificationsError, setNotificationsError] = useState();
  const [notificationsLoading, setNotificationsLoading] = useState(true);
  const [refreshFlag, setRefreshFlag] = useState(0);

  function refreshNotifications() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!limit || !page || !userId) return;
    setNotificationsLoading(true);

    let subscribe = true;
    frontendReadNotifications({ limit, page, userId, facultyId, read })
      .then((res) => {
        if (!subscribe) return;
        setNotifications(res);
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
  }, [limit, page, userId, read, refreshFlag]);

  return {
    notifications,
    notificationsError,
    notificationsLoading,
    refreshNotifications,
  };
}
