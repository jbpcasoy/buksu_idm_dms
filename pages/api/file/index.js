// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { reqLog } from "@/services/api/logger";

export default async function handler(req, res) {
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      const { page = 1, limit = 10 } = req.query;
      const files = await readFiles({
        limit: parseInt(limit),
        page: parseInt(page),
      });
      res.status(200).json(files);
      break;
    //   case 'GET':
    //     res.status(200).json({ message: 'Hello from the GET method' });
    //     break;
    case "POST":
      const { fileName, originalFileName, iMId, googleDocsUrl } = req.body;
      const file = await createFile({
        fileName,
        originalFileName,
        iMId,
        googleDocsUrl,
      });
      res.status(200).json(file);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
