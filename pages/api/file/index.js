// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { reqLog } from "@/services/api/logger";
import getFilesHandler from "@/services/handlers/file/getFilesHandlers";
import postFileHandler from "@/services/handlers/file/postFileHandler";
import methodNaHandler from "@/services/handlers/methodNaHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);

    switch (req.method) {
      case "GET":
        return getFilesHandler(req, res);
      case "POST":
        return postFileHandler(req, res);
      default:
        return methodNaHandler(req, res);
    }
  });
}
