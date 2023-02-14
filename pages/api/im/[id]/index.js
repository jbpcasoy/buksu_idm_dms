import deleteIm from "@/services/api/im/deleteIM";
import readIM from "@/services/api/im/readIM";
import updateIM from "@/services/api/im/updateIM";
import { reqLog } from "@/services/api/logger";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  reqLog(req, res);
  const { id } = req.query;

  if (!session?.user) {
    return res.status(401).json({ error: "Authentication was required." });
  }

  switch (req.method) {
    case "GET":
      try {
        const foundIM = await readIM(id);

        res.status(200).json(foundIM);
      } catch (error) {
        if (error.code === "P2025") {
          res.status(404).json({ error: "IM Not Found" });
        } else {
          throw error;
        }
      }
      break;
    case "PUT":
      try {
        const { title, serialNumber, status } = req.body;
        const updatedIm = await updateIM(id, { title, serialNumber, status });

        res.status(200).json(updatedIm);
      } catch (error) {
        if (error.code === "P2025") {
          res.status(404).json({ error: "IM Not Found" });
        } else {
          throw error;
        }
      }
      break;
    case "DELETE":
      try {
        const deletedIm = await deleteIm(id);

        res.status(200).json(deletedIm);
      } catch (error) {
        if (error.code === "P2025") {
          res.status(404).json({ error: "IM Not Found" });
        } else {
          throw error;
        }
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
