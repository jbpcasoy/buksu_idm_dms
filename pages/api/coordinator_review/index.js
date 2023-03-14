import { reqLog } from "@/services/api/logger";
import getCoordinatorReviewsHandler from "@/services/handlers/coordinator_review/getCoordinatorReviewsHandler";
import postCoordinatorReviewHandler from "@/services/handlers/coordinator_review/postCoordinatorReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorReviewHandler(req, res);
    case "GET":
      return getCoordinatorReviewsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
