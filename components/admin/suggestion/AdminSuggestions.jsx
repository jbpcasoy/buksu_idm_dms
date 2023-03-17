import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import AdminSuggestionItem from "./AdminSuggestionItem";

export default function AdminSuggestions({ title, suggestionItems = [] }) {
  return (
    <Box>
      <Toolbar>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Suggestion</TableCell>
              <TableCell>Action Taken</TableCell>
              <TableCell>Page No.</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suggestionItems.map((suggestionItem) => (
              <AdminSuggestionItem
                key={suggestionItem.id}
                value={suggestionItem.value}
                actionTaken={suggestionItem.actionTaken}
                pageNumber={suggestionItem.pageNumber}
                remarks={suggestionItem.remarks}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
