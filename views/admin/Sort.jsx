import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export default function Sort({
  sortOptions = [],
  onChangeSortColumn,
  onChangeSortOrder,
  sortOrder,
  sortColumn,
}) {
  return (
    <Stack direction='row' spacing={1}>
      <FormControl size='small' sx={{ width: "auto" }}>
        <InputLabel>Sort by</InputLabel>
        <Select
          value={sortColumn}
          label='Sort by'
          onChange={onChangeSortColumn}
        >
          {sortOptions.map((sortOption) => (
            <MenuItem value={sortOption.value} key={sortOption.value}>
              {sortOption.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <ToggleButtonGroup
        size='small'
        value={sortOrder}
        exclusive
        onChange={onChangeSortOrder}
      >
        <ToggleButton value='asc' aria-label='ascending'>
          <ArrowUpwardIcon />
        </ToggleButton>
        <ToggleButton value='desc' aria-label='descending'>
          <ArrowDownwardIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
