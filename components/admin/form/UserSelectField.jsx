import frontendReadUsers from "@/services/frontend/admin/user/frontendReadUsers";
import {
  Autocomplete,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function UserSelectField({ onChange, ...props }) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log({ input });

    frontendReadUsers({
      limit: 10,
      page: 1,
      name: input,
    }).then((res) => {
      setOptions(
        res.data.map((user) => ({
          label: user.name,
          id: user.id,
          image: user.image,
          email: user.email,
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
        <TextField {...params} label='User' {...props} />
      )}
      renderOption={(props, option, state) => {
        console.log({ props, option, state });
        return (
          <ListItem {...props}>
            <ListItemAvatar>
              <Avatar src={option.image} />
            </ListItemAvatar>
            <ListItemText primary={option.label} secondary={option.email} />
          </ListItem>
        );
      }}
    />
  );
}
