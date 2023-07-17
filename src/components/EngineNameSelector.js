import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const EngineNameSelector = ({ engineName, setEngineName }) => {
  const engineNames = [
    "libquery_engine.so.node (Library)",
    "query-engine (Binary)",
    "migration-engine",
    "introspection-engine",
    "prisma-fmt",
    "schema-engine",
  ];

  return (
    <FormControl variant="outlined">
      <InputLabel id="engine-name-label">Engine Name</InputLabel>
      <Select
        labelId="engine-name-label"
        value={engineName}
        onChange={(e) => setEngineName(e.target.value)}
        label="Engine Name"
      >
        {engineNames.map((engineName) => (
          <MenuItem key={engineName} value={engineName}>
            {engineName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EngineNameSelector;
