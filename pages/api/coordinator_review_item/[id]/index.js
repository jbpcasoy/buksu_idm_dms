import { reqLog } from "@/services/api/logger";
import deleteCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/deleteCoordinatorReviewItemHandler";
import getCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/getCoordinatorReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCoordinatorReviewItemHandler(req, res);
    case "DELETE":
      return deleteCoordinatorReviewItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
