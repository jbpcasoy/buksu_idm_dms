import { reqLog } from "@/services/api/logger";
import deleteImReviewQuestionHandler from "@/services/handlers/im_review_question/deleteImReviewQuestionHandler";
import getImReviewQuestionHandler from "@/services/handlers/im_review_question/getImReviewQuestionHandler";
import putImReviewQuestionHandler from "@/services/handlers/im_review_question/putImReviewQuestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getImReviewQuestionHandler(req, res);
    case "PUT":
      return putImReviewQuestionHandler(req, res);
    case "DELETE":
      return deleteImReviewQuestionHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
