import userAbility from "@/services/abilities/defineAbility";
import readSubmittedCoordinatorReviews from "@/services/api/submitted_coordinator_review/readSubmittedCoordinatorReviews";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedCoordinatorReviewsHandler(req, res) {
  const { limit = 10, page = 1, coordinatorReviewId } = req.query;
  const user = await getServerUser(req, res);

  const submittedCoordinatorReviews = await readSubmittedCoordinatorReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    coordinatorReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedCoordinatorReviews);
}
