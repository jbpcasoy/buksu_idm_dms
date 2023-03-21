import { reqLog } from "@/services/api/logger";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import getSubmittedChairpersonSuggestionHandler from "@/services/handlers/submitted_chairperson_suggestion/getSubmittedChairpersonSuggestionHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getSubmittedChairpersonSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
