import frontendReadFiles from "@/services/frontend/admin/file/frontendReadFiles";
import { useEffect, useState } from "react";

export default function useFiles({ iMId, page, limit }) {
  const [files, setFiles] = useState([]);
  const [filesError, setFilesError] = useState();
  const [filesLoading, setFilesLoading] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(0);

  function refreshFiles() {
    setRefreshFlag((prev) => prev + 1);
  }

  useEffect(() => {
    let subscribe = true;

    setFilesLoading(true);
    frontendReadFiles({
      limit,
      page,
      iMId,
      sortColumn: "createdAt",
      sortOrder: "desc",
    })
      .then((res) => {
        if (!subscribe) return;
        setFiles(res);
      })
      .catch((err) => {
        if (!subscribe) return;
        setFilesError(err);
      })
      .finally(() => {
        if (!subscribe) return;
        setFilesLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [iMId, page, limit]);

  return {
    files,
    filesError,
    filesLoading,
    refreshFiles,
  };
}
