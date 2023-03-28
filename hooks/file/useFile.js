import frontendReadFile from "@/services/frontend/file/frontendReadFile";
import { useEffect, useState } from "react";

export default function useFile(id) {
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState();
  const [fileLoading, setFileLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    let subscribe = true;

    setFileLoading(true);

    frontendReadFile(id)
      .then((res) => {
        if (!subscribe) return;
        setFile(res);
      })
      .catch((err) => {
        if (!subscribe) return;
        setFileError(err);
      })
      .finally(() => {
        if (!subscribe) return;
        setFileLoading(false);
      });

    return () => {
      subscribe = false;
    };
  }, [id]);

  return { file, fileError, fileLoading };
}
