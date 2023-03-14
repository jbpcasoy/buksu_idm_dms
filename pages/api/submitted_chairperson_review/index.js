import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedChairpersonReviewsHandler from "@/services/handlers/submitted_chairperson_review/getSubmittedChairpersonReviewsHandler";
import postSubmittedChairpersonReviewHandler from "@/services/handlers/submitted_chairperson_review/postSubmittedChairpersonReviewHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSubmittedChairpersonReviewHandler(req, res);
    case "GET":
      return getSubmittedChairpersonReviewsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
