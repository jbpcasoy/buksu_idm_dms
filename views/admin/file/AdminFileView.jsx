import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Chip, TableCell, TableRow } from "@mui/material";

export default function AdminFileView({
  originalFileName,
  fileName,
  iM,
  active,
}) {
  return (
    <TableRow>
      <TableCell>{fileName}</TableCell>
      <TableCell>{originalFileName}</TableCell>
      <TableCell>{iM}</TableCell>
      <TableCell align='center'>
        {active && (
          <Chip
            label='Active'
            size='small'
            color='success'
            icon={<CheckIcon />}
          />
        )}
        {!active && (
          <Chip
            label='Inactive'
            size='small'
            color='error'
            icon={<CloseIcon />}
          />
        )}
      </TableCell>
    </TableRow>
  );
}
