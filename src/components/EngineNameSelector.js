import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const EngineNameSelector = ({ engineName, setEngineName }) => {
  const engineLabels = [
    "libquery_engine.so.node (Library)",
    "query-engine (Binary)",
    "schema-engine",
    "migration-engine",
    "introspection-engine",
    "prisma-fmt",
  ];

  const engineValues = [
    "libquery_engine.so.node",
    "query-engine",
    "schema-engine",
    "migration-engine",
    "introspection-engine",
    "prisma-fmt",
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
        {engineLabels.map((engineLabel, index) => (
          <MenuItem key={engineLabel} value={engineValues[index]}>
            {engineLabel}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EngineNameSelector;
