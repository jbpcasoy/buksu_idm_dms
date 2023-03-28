import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useToEndorseCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

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
      status: "DEPARTMENT_REVIEWED",
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
