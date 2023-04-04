import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createCITLDirectorEndorsement from "@/services/api/citl_director_endorsement/createCITLDirectorEndorsement";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postCITLDirectorEndorsementHandler(req, res) {
  const { iMDCoordinatorEndorsementId } = req.body;

  const session = await getServerSession(req, res, authOptions);
  const user = await getUserByEmail(session?.user?.email);

  const cITLDirectorEndorsement = await createCITLDirectorEndorsement({
    iMDCoordinatorEndorsementId,
    cITLDirectorId: user.CITLDirector.ActiveCITLDirector.cITLDirectorId,
  });
  return res.status(201).json(cITLDirectorEndorsement);
}
