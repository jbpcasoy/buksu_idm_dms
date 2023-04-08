import frontendReadActiveFaculties from "@/services/frontend/admin/active_faculty/frontendReadActiveFaculties";
import frontendReadActiveFaculty from "@/services/frontend/admin/active_faculty/frontendReadFaculty";
import { useEffect, useState } from "react";

export default function useActiveActiveFaculty({ id }) {
  const [activeActiveFaculty, setActiveFaculty] = useState();
  const [activeActiveFacultyError, setActiveFacultyError] = useState();
  const [activeActiveFacultyLoading, setActiveFacultyLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    let subscribe = true;
    setActiveFacultyLoading(true);

    frontendReadActiveFaculty(id)
      .then((res) => {
        if (!subscribe) return;
        setActiveFaculty(res);
      })
      .catch((err) => {
        setActiveFacultyError(err);
      })
      .finally(() => {
        setActiveFacultyLoading(true);
      });

    return () => {
      subscribe = false;
    };
  }, [id]);

  return {
    activeActiveFaculty,
    activeActiveFacultyError,
    activeActiveFacultyLoading,
  };
}
