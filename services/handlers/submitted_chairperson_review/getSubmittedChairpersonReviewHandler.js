import userAbility from "@/services/abilities/defineAbility";
import readSubmittedChairpersonReview from "@/services/api/submitted_chairperson_review/readSubmittedChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedChairpersonReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedChairpersonReview = await readSubmittedChairpersonReview({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedChairpersonReview);
}
