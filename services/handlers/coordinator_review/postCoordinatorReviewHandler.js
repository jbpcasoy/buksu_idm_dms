import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createCoordinatorReview from "@/services/api/coordinator_review/createCoordinatorReview";
import getUserByEmail from "@/services/helpers/getUserByEmail";
import { getServerSession } from "next-auth";

export default async function postCoordinatorReviewHandler(req, res) {
  const { iMId } = req.body;
  const session = await getServerSession(req, res, authOptions);
  const user = await getUserByEmail(session?.user?.email);

  const coordinatorReview = await createCoordinatorReview({
    iMId,
    coordinatorId: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
  });
  return res.status(201).json(coordinatorReview);
}
