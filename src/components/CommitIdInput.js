import React from "react";
import TextField from "@mui/material/TextField";

const CommitIdInput = ({ commitId, setCommitId }) => {
  return (
    <TextField
      label="Commit Hash"
      variant="outlined"
      value={commitId}
      onChange={(e) => setCommitId(e.target.value)}
    />
  );
};

export default CommitIdInput;
