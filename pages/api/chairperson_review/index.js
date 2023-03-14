import { reqLog } from "@/services/api/logger";
import getChairpersonReviewsHandler from "@/services/handlers/chairperson_review/getChairpersonReviewsHandler";
import postChairpersonReviewHandler from "@/services/handlers/chairperson_review/postChairpersonReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postChairpersonReviewHandler(req, res);
    case "GET":
      return getChairpersonReviewsHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
