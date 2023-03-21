import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import postSubmittedChairpersonSuggestion from "@/services/handlers/submitted_chairperson_suggestion/postSubmittedChairpersonSuggestion";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postSubmittedChairpersonSuggestion(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
