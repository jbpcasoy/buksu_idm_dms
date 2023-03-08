import { reqLog } from "@/services/api/logger";
import postChairpersonReviewHandler from "@/services/handlers/chairperson_review/postChairpersonReviewHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postChairpersonReviewHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
