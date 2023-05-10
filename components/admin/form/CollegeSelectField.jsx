import frontendReadColleges from "@/services/frontend/admin/college/frontendReadColleges";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function CollegeSelectField({
  onChange,
  defaultValue,
  ...props
}) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log({ input });

    frontendReadColleges({
      limit: 10,
      page: 1,
      name: input,
    }).then((res) => {
      setOptions(
        res.data.map((college) => ({ label: college.name, id: college.id }))
      );
    });
  }, [input]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      onInputChange={(_, value) => setInput(value)}
      onChange={(_, value) => {
        onChange(value?.id);
      }}
      defaultValue={defaultValue}
      disabled={Boolean(defaultValue)}
      renderInput={(params) => (
        <TextField {...params} label='College' size='small' {...props} />
      )}
    />
  );
}
