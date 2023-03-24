import {
  Alert,
  AlertTitle,
  Box,
  Skeleton,
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

export default function AdminSuggestions({
  suggestionItemsLoading,
  title,
  suggestionItems = [],
}) {
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
            {suggestionItemsLoading && (
              <TableRow>
                <TableCell>
                  <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
                </TableCell>
                <TableCell>
                  <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
                </TableCell>
                <TableCell>
                  <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
                </TableCell>
                <TableCell>
                  <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
                </TableCell>
              </TableRow>
            )}
            {!suggestionItemsLoading &&
              suggestionItems.map((suggestionItem) => (
                <AdminSuggestionItem
                  key={suggestionItem.id}
                  value={suggestionItem.value}
                  actionTaken={suggestionItem.actionTaken}
                  pageNumber={suggestionItem.pageNumber}
                  remarks={suggestionItem.remarks}
                />
              ))}
            {!suggestionItemsLoading && suggestionItems.length < 1 && (
              <TableRow>
                <TableCell colSpan={4}>
                  <Alert severity='info'>
                    <AlertTitle>Empty</AlertTitle>
                    There are no suggestions.
                  </Alert>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
