import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

export default function ActiveFilter({ onChange }) {
  const [active, setActive] = useState("All");

  useEffect(() => {
    onChange(active === "Active" ? true : active === "Inactive" ? false : null);
  }, [active]);

  return (
    <FormControl size='small' sx={{ width: "auto" }}>
      <InputLabel>Status</InputLabel>
      <Select
        value={active}
        label='Status'
        onChange={(e) => setActive(e.target.value)}
      >
        <MenuItem value='All'>All</MenuItem>
        <MenuItem value='Active'>Active</MenuItem>
        <MenuItem value='Inactive'>Inactive</MenuItem>
      </Select>
    </FormControl>
  );
}
