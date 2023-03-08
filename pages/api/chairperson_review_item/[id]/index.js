import { reqLog } from "@/services/api/logger";
import deleteChairpersonReviewItemHandler from "@/services/handlers/chairperson_review_item/deleteChairpersonReviewItemHandler";
import getChairpersonReviewItemHandler from "@/services/handlers/chairperson_review_item/getChairpersonReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonReviewItemHandler(req, res);
    case "DELETE":
      return deleteChairpersonReviewItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
