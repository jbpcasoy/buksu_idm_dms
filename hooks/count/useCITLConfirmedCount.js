import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useCITLConfirmedCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.CITLDirector?.ActiveCITLDirector) return;
    let subscribe = true;

    async function getEndorsed(filter) {
      return frontendGetIMs({
        ...filter,
        status: "CITL_ENDORSED",
        iMDCoordinatorEndorsed: true,
        endorsedByCITLDirector: user.CITLDirector.id,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getEndorsed(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
