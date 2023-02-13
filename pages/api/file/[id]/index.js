import deleteFile from "@/services/api/file/deleteFile";
import readFile from "@/services/api/file/readFile";
import updateFile from "@/services/api/file/updateFile";
import { reqLog } from "@/services/api/logger";

export default async function handler(req, res) {
  reqLog(req, res);
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const foundFile = await readFile(id);

      res.status(200).json(foundFile);
      break;
    case "PUT":
      const { googleDocsUrl } = req.body;
      const updatedFile = await updateFile(id, { googleDocsUrl });

      res.status(200).json(updatedFile);
      break;
    case "DELETE":
      const deletedFile = await deleteFile(id);

      res.status(200).json(deletedFile);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
