import { reqLog } from "@/services/api/logger";
import deleteCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/deleteCoordinatorReviewItemHandler";
import getCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/getCoordinatorReviewItemHandler";
import putCoordinatorReviewItemHandler from "@/services/handlers/coordinator_review_item/putCoordinatorReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorReviewItemHandler(req, res);
      case "PUT":
        return putCoordinatorReviewItemHandler(req, res);
      case "DELETE":
        return deleteCoordinatorReviewItemHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
