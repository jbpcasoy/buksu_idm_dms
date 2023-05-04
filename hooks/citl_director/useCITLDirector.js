import frontendReadCITLDirectors from "@/services/frontend/citl_director/frontendReadCITLDirectors";
import { useEffect, useState } from "react";

export default function useCITLDirector() {
  const [citlDirector, setCitlDirector] = useState();
  const [citlDirectorLoading, setCitlDirectorLoading] = useState(true);
  const [citlDirectorError, setCitlDirectorError] = useState();

  useEffect(() => {
    let subscribe = true;

    frontendReadCITLDirectors({
      limit: 1,
      page: 1,
      active: true,
    })
      .then((res) => {
        console.log({ CITLDirector: res });
        if (!subscribe) return;

        setCitlDirector(res.data[0]);
      })
      .catch((err) => {
        setCitlDirectorError(err);
      })
      .finally(() => {
        setCitlDirectorLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, []);

  return {
    citlDirector,
    citlDirectorError,
    citlDirectorLoading,
  };
}
