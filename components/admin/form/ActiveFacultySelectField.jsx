import frontendReadActiveFaculty from "@/services/frontend/admin/active_faculty/frontendReadActiveFaculty";
import {
  Autocomplete,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function ActiveFacultySelectField({ onChange, ...props }) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log({ input });

    frontendReadActiveFaculty({
      limit: 10,
      page: 1,
      name: input,
    }).then((res) => {
      console.log({ data: res.data[0] });

      setOptions(
        res.data.map((activeFaculty) => ({
          label: activeFaculty.Faculty.user.name,
          id: activeFaculty.Faculty.id,
          image: activeFaculty.Faculty.user.image,
          department: activeFaculty.Faculty.department.name,
        }))
      );
    });
  }, [input]);

  return (
    <Autocomplete
      disablePortal
      options={options}
      onInputChange={(_, value) => setInput(value)}
      onChange={(_, value) => {
        onChange(value?.id ?? "");
      }}
      renderInput={(params) => (
        <TextField {...params} label='Active Faculty' size='small' {...props} />
      )}
      renderOption={(props, option) => {
        return (
          <ListItem {...props}>
            <ListItemAvatar>
              <Avatar src={option.image} />
            </ListItemAvatar>
            <ListItemText
              primary={option.label}
              secondary={option.department}
            />
          </ListItem>
        );
      }}
    />
  );
}
