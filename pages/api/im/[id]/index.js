import { reqLog } from "@/services/api/logger";
import deleteImHandler from "@/services/handlers/im/deleteImHandler";
import getImHandler from "@/services/handlers/im/getImHandler";
import putImHandler from "@/services/handlers/im/putImHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getImHandler(req, res);
    case "PUT":
      return putImHandler(req, res);
    case "DELETE":
      return deleteImHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
