import React from "react";
import Button from "@mui/material/Button";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function DownloadLink({ url, disabled }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FileDownloadIcon />}
      href={url}
      target="_blank"
      rel="noopener"
      disabled={disabled}
    >
      Download Engine
    </Button>
  );
}

export default DownloadLink;
