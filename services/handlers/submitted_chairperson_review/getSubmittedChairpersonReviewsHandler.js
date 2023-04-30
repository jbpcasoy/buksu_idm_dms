import userAbility from "@/services/abilities/defineAbility";
import readSubmittedChairpersonReviews from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReviews";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedChairpersonReviewsHandler(req, res) {
  const { limit = 10, page = 1, chairpersonReviewId } = req.query;
  const user = await getServerUser(req, res);

  const submittedChairpersonReviews = await readSubmittedChairpersonReviews({
    limit: parseInt(limit),
    page: parseInt(page),
    chairpersonReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedChairpersonReviews);
}
