import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReviews from "@/services/api/chairperson_review/readChairpersonReviews";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonReviewsHandler(req, res) {
  const { limit = 10, page = 1, iMId, chairpersonId } = req.query;
  const user = await getServerUser(req, res);

  const chairpersonReviews = await readChairpersonReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    iMId,
    chairpersonId,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonReviews);
}
