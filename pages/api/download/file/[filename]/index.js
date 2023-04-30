import { reqLog } from "@/services/api/logger";
import downloadHandler from "@/services/helpers/downloadHandler";
import catchAllError from "@/services/middleware/catchAllError";

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    const { filename } = req.query;
    const path = `uploads/file/${filename}`;

    res.setHeader("Content-Disposition", `inline`);
    res.setHeader("Content-Type", `application/pdf`);
    return downloadHandler({ path, res });
  });
}
