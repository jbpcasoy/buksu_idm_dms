import userAbility from "@/services/abilities/defineAbility";
import readSubmittedCoordinatorReview from "@/services/api/submitted_coordinator_review/readSubmittedCoordinatorReview";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedCoordinatorReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedCoordinatorReview = await readSubmittedCoordinatorReview({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedCoordinatorReview);
}
