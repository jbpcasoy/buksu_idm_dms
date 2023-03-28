import { reqLog } from "@/services/api/logger";
import postActiveDeanHandler from "@/services/handlers/active_dean/postActiveDeanHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postActiveDeanHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
