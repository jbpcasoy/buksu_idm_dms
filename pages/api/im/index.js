import createIM from "@/services/api/im/createIM";
import readIMs from "@/services/api/im/readIMs";
import { reqLog } from "@/services/api/logger";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  reqLog(req, res);

  switch (req.method) {
    case "GET":
      const { page = 1, limit = 10 } = req.query;
      const ims = await readIMs({
        limit: parseInt(limit),
        page: parseInt(page),
      });
      res.status(200).json(ims);
      break;
    case "POST":
      const { title, serialNumber } = req.body;
      const im = await createIM({
        title,
        serialNumber,
        ownerId: session.user.id,
      });
      res.status(200).json(im);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
