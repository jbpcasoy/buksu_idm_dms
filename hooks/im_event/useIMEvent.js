import frontendReadIMEvent from "@/services/frontend/im_event/frontendReadIMEvent";
import { useEffect, useState } from "react";

export default function useIMEvent({ iMEventId }) {
  const [iMEvent, setIMEvent] = useState([]);
  const [iMEventLoading, setIMEventLoading] = useState(true);
  const [iMEventError, setIMEventError] = useState(null);

  useEffect(() => {
    if (!iMEventId) return;
    let isSubscribed = true;

    frontendReadIMEvent(iMEventId)
      .then((res) => {
        if (!isSubscribed) return;
        setIMEvent(res);
        setIMEventLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setIMEventError(err);
        setIMEventLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [iMEventId]);

  return {
    iMEvent,
    iMEventLoading,
    iMEventError,
  };
}
