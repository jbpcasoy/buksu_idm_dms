import frontendReadIMEvents from "@/services/frontend/im_event/frontendReadIMEvents";
import { useEffect, useState } from "react";

export default function useUserEvents({ facultyId, limit, page }) {
  const [iMEvents, setIMEvents] = useState([]);
  const [iMEventsLoading, setIMEventsLoading] = useState(true);
  const [iMEventsError, setIMEventsError] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);
  function refreshIMEvents() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!facultyId) return;
    let isSubscribed = true;

    frontendReadIMEvents({
      facultyId: facultyId,
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
  }, [facultyId, refreshFlag, limit, page]);

  return {
    iMEvents,
    iMEventsLoading,
    iMEventsError,
    refreshIMEvents,
  };
}
