import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import { useEffect, useState } from "react";
import useUser from "../useUser";

export default function useMyImsCount() {
  const [count, setCount] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;

    async function getMyIMs(filter) {
      return frontendGetIMs({
        ownerId: user.ActiveFaculty.Faculty.id,
        ...filter,
      });
    }

    const filter = {
      page: 1,
      limit: 1,
    };

    getMyIMs(filter).then((res) => {
      if (!subscribe) return;

      setCount(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user]);

  return { count };
}
