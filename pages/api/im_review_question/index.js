import { reqLog } from "@/services/api/logger";
import getImReviewQuestionsHandler from "@/services/handlers/im_review_question/getImReviewQuestionsHandler";
import postImReviewQuestionHandler from "@/services/handlers/im_review_question/postImReviewQuestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postImReviewQuestionHandler(req, res);
    case "GET":
      return getImReviewQuestionsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
