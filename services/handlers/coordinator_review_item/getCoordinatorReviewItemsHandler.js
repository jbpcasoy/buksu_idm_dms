import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReviewItems from "@/services/api/coordinator_review_item/readCoordinatorReviewItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorReviewItemsHandler(req, res) {
  const { limit, page, questionId, coordinatorReviewId } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorReviewItems = await readCoordinatorReviewItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    questionId,
    coordinatorReviewId,
    ability: await userAbility(user),
  });

  return res.status(200).json(coordinatorReviewItems);
}
