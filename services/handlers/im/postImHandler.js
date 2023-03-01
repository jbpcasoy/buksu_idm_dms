import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createIM from "@/services/api/im/createIM";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postImHandler(req, res) {
  const { title, serialNumber, authors } = req.body;
  const session = await getServerSession(req, res, authOptions);

  const user = await getUserByEmail(session?.user?.email);

  const im = await createIM({
    title,
    serialNumber,
    ownerId: user.ActiveFaculty.facultyId,
    authors,
  });

  return res.status(201).json(im);
}
