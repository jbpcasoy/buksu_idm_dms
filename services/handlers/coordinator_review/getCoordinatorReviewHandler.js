import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReview from "@/services/api/coordinator_review/readCoordinatorReview";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorReview = await readCoordinatorReview({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorReview);
}
