import getImsHandler from "@/services/handlers/im/getImsHandler";
import postImHandler from "@/services/handlers/im/postImHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getImsHandler(req, res);
    case "POST":
      return postImHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
