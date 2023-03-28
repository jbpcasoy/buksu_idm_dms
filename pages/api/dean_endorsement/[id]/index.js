import { reqLog } from "@/services/api/logger";
import getDeanEndorsementHandler from "@/services/handlers/dean_endorsement/getDeanEndorsementHandler";

export default async function handler(req, res) {
  await reqLog(req, res);

  switch (req.method) {
    case "GET":
      return getDeanEndorsementHandler(req, res);
  }
}
