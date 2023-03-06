import { reqLog } from "@/services/api/logger";
import getImReviewQuestionHandler from "@/services/handlers/im_review_question/getImReviewQuestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getImReviewQuestionHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
