import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/createIMDCoordinatorSuggestion";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postIMDCoordinatorSuggestionHandler(req, res) {
  const { iMDCoordinatorId, iMId } = req.body;
  const session = await getServerSession(req, res, authOptions);
  const user = await getUserByEmail(session?.user?.email);

  const iMDCoordinatorSuggestion = await createIMDCoordinatorSuggestion({
    iMDCoordinatorId: user.IMDCoordinator.id,
    iMId,
  });

  return res.status(201).json(iMDCoordinatorSuggestion);
}
