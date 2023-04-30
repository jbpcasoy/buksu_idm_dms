import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReviewItems from "@/services/api/chairperson_review_item/readChairpersonReviewItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonReviewItemsHandler(req, res) {
  const { limit, page, questionId, chairpersonReviewId } = req.query;
  const user = await getServerUser(req, res);

  const chairpersonReviewItems = await readChairpersonReviewItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    questionId,
    chairpersonReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonReviewItems);
}
