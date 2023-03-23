import frontendReadReadNotification from "@/services/frontend/read_notification/frontendReadReadNotification";
import { useEffect, useState } from "react";

export default function useReadNotification({ notificationId }) {
  const [readNotification, setReadNotification] = useState();
  const [readNotificationLoading, setReadNotificationLoading] = useState(true);
  const [readNotificationError, setReadNotificationError] = useState();

  useEffect(() => {
    if (!notificationId) return;

    let subscribe = true;
    setReadNotificationLoading(true);

    frontendReadReadNotification({ notificationId })
      .then((res) => {
        if (!subscribe) return;

        if (res?.total > 0) return setReadNotification(res?.data[0]);
        setReadNotification(null);
      })
      .catch((err) => {
        console.error(err);
        setReadNotificationError(err);
      })
      .finally(() => {
        setReadNotificationLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [notificationId]);

  return { readNotification, readNotificationLoading, readNotificationError };
}
