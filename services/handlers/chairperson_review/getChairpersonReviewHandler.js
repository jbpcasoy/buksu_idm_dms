import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReview from "@/services/api/chairperson_review/readChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const chairpersonReview = await readChairpersonReview({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonReview);
}
