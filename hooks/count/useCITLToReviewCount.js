import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useCITLToReviewCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.IMDCoordinator?.ActiveIMDCoordinator) return;
    let subscribe = true;

    async function getToReview(filter) {
      return frontendGetIMs({
        ...filter,
        status: "DEPARTMENT_ENDORSED",
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
