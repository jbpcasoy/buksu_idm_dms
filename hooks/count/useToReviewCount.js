import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useEffect, useState } from "react";
import useUser from "../useUser";

export default function useToReviewCount() {
  const [count, setCount] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getToReview(filter) {
      return frontendGetIMs({
        notOwnerId: user.ActiveFaculty.Faculty.id,
        departmentId: user.ActiveFaculty.Faculty.departmentId,
        ...filter,
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
