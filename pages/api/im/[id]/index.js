import deleteIm from "@/services/api/im/deleteIM";
import readIM from "@/services/api/im/readIM";
import updateIM from "@/services/api/im/updateIM";
import { reqLog } from "@/services/api/logger";

export default async function handler(req, res) {
  reqLog(req, res);
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const foundIM = await readIM(id);

      res.status(200).json(foundIM);
      break;
    case "PUT":
      const { title, serialNumber, status } = req.body;
      const updatedIm = await updateIM(id, { title, serialNumber, status });

      res.status(200).json(updatedIm);
      break;
    case "DELETE":
      const deletedIm = await deleteIm(id);

      res.status(200).json(deletedIm);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
