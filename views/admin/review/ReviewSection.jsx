import styled from "@emotion/styled";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ReviewQuestion from "./ReviewQuestion";

export default function ReviewSection({ section, reviewItems }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));

  function findReviewItem(questionId) {
    return reviewItems.find(
      (reviewItem) => reviewItem.questionId === questionId
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mb: 1 }}>
      <Table>
        <TableHead sx={{ bgcolor: "primary.main" }} color='white'>
          <TableRow>
            <StyledTableCell>{section.title}</StyledTableCell>
            <StyledTableCell align='center' width={150}>
              Very Much
            </StyledTableCell>
            <StyledTableCell align='center' width={150}>
              Much
            </StyledTableCell>
            <StyledTableCell align='center' width={150}>
              Just Enough
            </StyledTableCell>
            <StyledTableCell align='center' width={150}>
              Not Much
            </StyledTableCell>
            <StyledTableCell align='center' width={150}>
              Not At All
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {section.questions.map((question) => (
            <ReviewQuestion
              key={question.id}
              question={question}
              reviewItem={findReviewItem(question.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
