import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedCoordinatorReviewHandler from "@/services/handlers/submitted_coordinator_review/getSubmittedCoordinatorReviewHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSubmittedCoordinatorReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
