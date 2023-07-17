import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const PlatformSelector = ({ platform, setPlatform }) => {
  const platforms = [
    "darwin",
    "darwin-arm64",
    "windows",
    "linux-musl",
    "linux-musl-1.1.x",
    "linux-musl-openssl-3.0.x",
    "linux-musl-arm64-openssl-1.1.x",
    "linux-musl-arm64-openssl-3.0.x",
    "debian-openssl-1.0.x",
    "debian-openssl-1.1.x",
    "debian-openssl-3.0.x",
    "rhel-openssl-1.0.x",
    "rhel-openssl-1.1.x",
    "rhel-openssl-3.0.x",
    "linux-arm64-openssl-1.0.x",
    "linux-arm64-openssl-1.1.x",
    "linux-arm64-openssl-3.0.x",
  ];

  return (
    <FormControl variant="outlined">
      <InputLabel id="platform-label">Platform</InputLabel>
      <Select
        labelId="platform-label"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        label="Platform"
      >
        {platforms.map((platform) => (
          <MenuItem key={platform} value={platform}>
            {platform}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlatformSelector;
