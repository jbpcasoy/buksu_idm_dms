import frontendReadNotification from "@/services/frontend/notification/frontendReadNotification";
import { useEffect, useState } from "react";

export default function useNotification({ notificationId }) {
  const [notification, setNotification] = useState();
  const [notificationError, setNotificationError] = useState();
  const [notificationLoading, setNotificationLoading] = useState(false);

  useEffect(() => {
    if (!notificationId) return;
    let subscribe = true;

    frontendReadNotification(notificationId)
      .then((res) => {
        if (!subscribe) return;

        setNotification(res);
      })
      .catch((err) => [setNotificationError(err)])
      .finally(() => {
        setNotificationLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [notificationId]);

  return { notification, notificationError, notificationLoading };
}
