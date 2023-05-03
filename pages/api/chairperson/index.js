import { reqLog } from "@/services/api/logger";
import getChairpersonsHandler from "@/services/handlers/chairperson/getChairpersonsHandler";
import postChairpersonHandler from "@/services/handlers/chairperson/postChairpersonHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getChairpersonsHandler(req, res);
      case "POST":
        return postChairpersonHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
