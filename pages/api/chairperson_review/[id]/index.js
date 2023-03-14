import { reqLog } from "@/services/api/logger";
import deleteChairpersonReviewHandler from "@/services/handlers/chairperson_review/deleteChairpersonReviewHandler";
import getChairpersonReviewHandler from "@/services/handlers/chairperson_review/getChairpersonReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonReviewHandler(req, res);
    case "DELETE":
      return deleteChairpersonReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
