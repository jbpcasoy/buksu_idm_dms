import CheckIcon from "@mui/icons-material/Check";
import { TableCell, TableRow } from "@mui/material";

export default function ReviewQuestion({ question, reviewItem }) {
  if (!reviewItem) return null;
  return (
    <TableRow>
      <TableCell>{question.label}</TableCell>
      <TableCell align='center'>
        {reviewItem?.answer === "VM" && <CheckIcon />}
      </TableCell>
      <TableCell align='center'>
        {reviewItem?.answer === "M" && <CheckIcon />}
      </TableCell>
      <TableCell align='center'>
        {reviewItem?.answer === "JE" && <CheckIcon />}
      </TableCell>
      <TableCell align='center'>
        {reviewItem?.answer === "NM" && <CheckIcon />}
      </TableCell>
      <TableCell align='center'>
        {reviewItem?.answer === "NAA" && <CheckIcon />}
      </TableCell>
    </TableRow>
  );
}
