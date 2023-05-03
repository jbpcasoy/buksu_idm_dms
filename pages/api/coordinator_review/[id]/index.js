import { reqLog } from "@/services/api/logger";
import deleteCoordinatorReviewHandler from "@/services/handlers/coordinator_review/deleteCoordinatorReviewHandler";
import getCoordinatorReviewHandler from "@/services/handlers/coordinator_review/getCoordinatorReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getCoordinatorReviewHandler(req, res);
      case "DELETE":
        return deleteCoordinatorReviewHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
