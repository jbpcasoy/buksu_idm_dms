import { reqLog } from "@/services/api/logger";
import postChairpersonReviewItemHandler from "@/services/handlers/chairperson_review_item/postChairpersonReviewItemHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postChairpersonReviewItemHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
