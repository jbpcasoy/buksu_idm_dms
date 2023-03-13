import { reqLog } from "@/services/api/logger";
import getChairpersonSuggestionHandler from "@/services/handlers/chairperson_suggestion/getChairpersonSuggestionHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getChairpersonSuggestionHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
