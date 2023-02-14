import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createIM from "@/services/api/im/createIM";
import { getServerSession } from "next-auth";

export default async function postImHandler(req, res) {
  const { title, serialNumber } = req.body;
  const session = await getServerSession(req, res, authOptions);

  const im = await createIM({
    title,
    serialNumber,
    ownerId: session.user.id,
  });
  return res.status(200).json(im);
}
