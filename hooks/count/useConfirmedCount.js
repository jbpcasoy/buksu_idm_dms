import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useConfirmedCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getConfirmedEndorsement(filter) {
      return frontendGetIMs({
        notOwnerId: user.ActiveFaculty.Faculty.id,
        departmentId: user.ActiveFaculty.Faculty.departmentId,
        status: "DEPARTMENT_REVIEWED",
        coordinatorEndorsed: true,
        deanEndorsed: true,
        endorsedByDean: user.ActiveFaculty.ActiveDean.deanId,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getConfirmedEndorsement(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
