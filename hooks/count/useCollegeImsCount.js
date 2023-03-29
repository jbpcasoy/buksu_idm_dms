import UserContext from "@/contexts/UserContext";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useContext, useEffect, useState } from "react";

export default function useCollegeImsCount() {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getCollegeIms(filter) {
      return frontendGetIMs({
        collegeId: user.ActiveFaculty.Faculty.department.collegeId,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getCollegeIms(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
