import { reqLog } from "@/services/api/logger";
import getImReviewSectionsHandler from "@/services/handlers/im_review_section/getImReviewSectionsHandler";
import postImReviewSectionHandler from "@/services/handlers/im_review_section/postImReviewSectionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getImReviewSectionsHandler(req, res);
    case "POST":
      return postImReviewSectionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
