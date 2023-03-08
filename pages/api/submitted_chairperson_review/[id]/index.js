import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedChairpersonReviewHandler from "@/services/handlers/submitted_chairperson_review/getSubmittedChairpersonReviewHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSubmittedChairpersonReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
