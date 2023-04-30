import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReviews from "@/services/api/coordinator_review/readCoordinatorReviews";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorReviewsHandler(req, res) {
  const { limit = 10, page = 1, iMId, coordinatorId } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorReviews = await readCoordinatorReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    iMId,
    coordinatorId,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorReviews);
}
