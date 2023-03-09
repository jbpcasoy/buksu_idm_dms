import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postSubmittedCoordinatorReview from "@/services/handlers/submitted_coordinator_review/postSubmittedCoordinatorReview";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSubmittedCoordinatorReview(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
