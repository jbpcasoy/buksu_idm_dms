import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import deleteSubmittedChairpersonReviewHandler from "@/services/handlers/submitted_chairperson_review/deleteSubmittedChairpersonReviewHandler";
import getSubmittedChairpersonReviewHandler from "@/services/handlers/submitted_chairperson_review/getSubmittedChairpersonReviewHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getSubmittedChairpersonReviewHandler(req, res);
      case "DELETE":
        return deleteSubmittedChairpersonReviewHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
