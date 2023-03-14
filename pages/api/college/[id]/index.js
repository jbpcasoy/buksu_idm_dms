import { reqLog } from "@/services/api/logger";
import deleteCollegeHandler from "@/services/handlers/college/deleteCollegeHandler";
import getCollegeHandler from "@/services/handlers/college/getCollegeHandler";
import putCollegeHandler from "@/services/handlers/college/putCollegeHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getCollegeHandler(req, res);
    case "PUT":
      return putCollegeHandler(req, res);
    case "DELETE":
      return deleteCollegeHandler(req, res);
    default:
      return methodNaHandler(req, res);
  }
}
