import { reqLog } from "@/services/api/logger";
import getImReviewSectionHandler from "@/services/handlers/im_review_section/getImReviewSectionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getImReviewSectionHandler(req, res);
    default:
      methodNaHandler(req, res);
  }
}
