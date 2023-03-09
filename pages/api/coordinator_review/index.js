import { reqLog } from "@/services/api/logger";
import postCoordinatorReviewHandler from "@/services/handlers/coordinator_review/postCoordinatorReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
