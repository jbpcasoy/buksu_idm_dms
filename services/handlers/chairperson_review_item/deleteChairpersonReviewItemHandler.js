import userAbility from "@/services/abilities/defineAbility";
import deleteChairpersonReviewItem from "@/services/api/chairperson_review_item/deleteChairpersonReviewItem";
import readChairpersonReviewItem from "@/services/api/chairperson_review_item/readChairpersonReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteChairpersonReviewItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const chairpersonReviewItem = await readChairpersonReviewItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonReviewItem = await deleteChairpersonReviewItem(id);
      return res.status(200).json(chairpersonReviewItem);
    },
    action: "delete",
    subject: subject("ChairpersonReviewItem", chairpersonReviewItem),
    fields: undefined,
    type: "ChairpersonReviewItem",
  });
}
