import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useDepartmentImsCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getDepartmentIms(filter) {
      return frontendGetIMs({
        departmentId: user.ActiveFaculty.Faculty.departmentId,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getDepartmentIms(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
