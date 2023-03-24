import frontendReadIM from "@/services/frontend/im/frontendReadIM";
import { useEffect, useState } from "react";

export default function useIM(id) {
  const [iM, setIM] = useState();
  const [iMError, setIMError] = useState();
  const [iMLoading, setIMLoading] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(0);

  function refreshIM() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    if (!id) return;
    let subscribe = true;
    setIMLoading(true);

    frontendReadIM(id)
      .then((res) => {
        if (!subscribe) return;
        setIM(res);
      })
      .catch((err) => {
        setIMError(err);
      })
      .finally(() => {
        setIMLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [id, refreshFlag]);

  return { iM, iMError, iMLoading, refreshIM };
}
