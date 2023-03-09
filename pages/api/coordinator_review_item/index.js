import { reqLog } from "@/services/api/logger";
import getCoordinatorReviewItemsHandler from "@/services/handlers/coordinator_review_item/getCoordinatorReviewItemsHandler";
import postCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/postCoordinatorReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postCoordinatorReviewItemHandler(req, res);
    case "GET":
      return getCoordinatorReviewItemsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
