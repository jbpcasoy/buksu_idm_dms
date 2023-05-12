import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useRouter } from "next/router";

export default function ExportButton({ link }) {
  const router = useRouter();

  return (
    <Tooltip title='Export to .csv'>
      <IconButton onClick={() => router.push(link)}>
        <CloudDownloadIcon />
      </IconButton>
    </Tooltip>
  );
}
