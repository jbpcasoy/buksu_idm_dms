import { reqLog } from "@/services/api/logger";
import getCoordinatorReviewHandler from "@/services/handlers/coordinator_review/getCoordinatorReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCoordinatorReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
