import { reqLog } from "@/services/api/logger";
import deleteDeanHandler from "@/services/handlers/dean/deleteDeanHandler";
import getDeanHandler from "@/services/handlers/dean/getDeanHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getDeanHandler(req, res);
    case "DELETE":
      return deleteDeanHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
