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
import { useEffect, useState } from "react";
import ReviewQuestion from "./ReviewQuestion";

export default function ReviewSection({ section, reviewItems }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    function findReviewItem(questionId) {
      return reviewItems.find(
        (reviewItem) => reviewItem.questionId === questionId
      );
    }

    const newQuestions = [];
    for (let question of section.questions) {
      const reviewItem = findReviewItem(question.id);
      if (reviewItem) {
        newQuestions.push(
          <ReviewQuestion
            key={question.id}
            question={question}
            reviewItem={reviewItem}
          />
        );
      }
    }

    setQuestions(newQuestions);
  }, [section]);

  if (questions.length < 1) return null;

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
        <TableBody>{questions}</TableBody>
      </Table>
    </TableContainer>
  );
}
