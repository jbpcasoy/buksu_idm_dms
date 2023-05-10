import frontendReadDepartments from "@/services/frontend/admin/department/frontendReadDepartments";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function DepartmentSelectField({
  onChange,
  defaultValue,
  collegeId,
  ...props
}) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log({ input });

    frontendReadDepartments({
      limit: 10,
      page: 1,
      name: input,
      collegeId,
    }).then((res) => {
      setOptions(
        res.data.map((department) => ({
          label: department.name,
          id: department.id,
        }))
      );
    });
  }, [input, collegeId]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      defaultValue={defaultValue}
      disabled={Boolean(defaultValue)}
      onInputChange={(_, value) => setInput(value)}
      onChange={(_, value) => {
        onChange(value?.id ?? "");
      }}
      renderInput={(params) => (
        <TextField {...params} label='Department' size='small' {...props} />
      )}
    />
  );
}
