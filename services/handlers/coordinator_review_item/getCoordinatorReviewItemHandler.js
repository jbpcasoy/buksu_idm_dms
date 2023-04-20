import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReviewItem from "@/services/api/coordinator_review_item/readCoordinatorReviewItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorReviewItemHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorReviewItem = await readCoordinatorReviewItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorReviewItem);
}
