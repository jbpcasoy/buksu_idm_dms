import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useEffect, useState } from "react";
import useUser from "../useUser";

export default function useReviewedCount() {
  const [count, setCount] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getReviewed(filter) {
      return frontendGetIMs({
        reviewerId: user.id,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getReviewed(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
