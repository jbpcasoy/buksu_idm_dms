import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/createIMDCoordinatorEndorsement";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postIMDCoordinatorEndorsementHandler(req, res) {
  const { submittedIMDCoordinatorSuggestionId } = req.body;

  const session = await getServerSession(req, res, authOptions);
  const user = await getUserByEmail(session?.user?.email);

  const iMDCoordinatorEndorsement = await createIMDCoordinatorEndorsement({
    iMDCoordinatorId: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
    submittedIMDCoordinatorSuggestionId,
  });
  return res.status(201).json(iMDCoordinatorEndorsement);
}
