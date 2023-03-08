import { reqLog } from "@/services/api/logger";
import getChairpersonReviewHandler from "@/services/handlers/chairperson_review/getChairpersonReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
