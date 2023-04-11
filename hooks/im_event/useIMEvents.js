import frontendReadIMEvents from "@/services/frontend/im_event/frontendReadIMEvents";
import { useEffect, useState } from "react";

export default function useIMEvents({ iMId, limit, page }) {
  const [iMEvents, setIMEvents] = useState([]);
  const [iMEventsLoading, setIMEventsLoading] = useState(true);
  const [iMEventsError, setIMEventsError] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  function refreshIMEvents() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!iMId) return;
    let isSubscribed = true;

    frontendReadIMEvents({
      iMId,
      limit,
      page,
    })
      .then((res) => {
        if (!isSubscribed) return;
        setIMEvents(res);
        setIMEventsLoading(false);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setIMEventsError(err);
        setIMEventsLoading(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [iMId, refreshFlag, limit, page]);

  return {
    iMEvents,
    iMEventsLoading,
    iMEventsError,
    refreshIMEvents,
  };
}
