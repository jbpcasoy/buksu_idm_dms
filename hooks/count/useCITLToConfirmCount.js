import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useCITLToConfirmCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getToReview(filter) {
      return frontendGetIMs({
        ...filter,
        iMDCoordinatorEndorsed: true,
        CITLDirectorEndorsed: false,
        status: "CITL_REVISED",
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getToReview(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
