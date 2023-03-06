import { reqLog } from "@/services/api/logger";
import postImReviewQuestionHandler from "@/services/handlers/im_review_question/postImReviewQuestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postImReviewQuestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
