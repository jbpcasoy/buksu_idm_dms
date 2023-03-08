import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postSubmittedChairpersonReviewHandler from "@/services/handlers/submitted_chairperson_review/postSubmittedChairpersonReviewHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSubmittedChairpersonReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
