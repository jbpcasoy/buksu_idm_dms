import { reqLog } from "@/services/api/logger";
import postDeanHandler from "@/services/handlers/dean/postDeanHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "POST":
      return postDeanHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
