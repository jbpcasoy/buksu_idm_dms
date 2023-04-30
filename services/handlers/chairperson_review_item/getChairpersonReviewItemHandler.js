import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReviewItem from "@/services/api/chairperson_review_item/readChairpersonReviewItem";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonReviewItemHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const chairpersonReviewItem = await readChairpersonReviewItem({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairpersonReviewItem);
}
