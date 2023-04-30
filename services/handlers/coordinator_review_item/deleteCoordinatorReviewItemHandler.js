import userAbility from "@/services/abilities/defineAbility";
import deleteCoordinatorReviewItem from "@/services/api/coordinator_review_item/deleteCoordinatorReviewItem";
import readCoordinatorReviewItem from "@/services/api/coordinator_review_item/readCoordinatorReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteCoordinatorReviewItemHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const coordinatorReviewItem = await readCoordinatorReviewItem({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deletedCoordinatorReviewItem = await deleteCoordinatorReviewItem(
        id
      );
      return res.status(200).json(deletedCoordinatorReviewItem);
    },
    action: "delete",
    subject: subject("CoordinatorReviewItem", coordinatorReviewItem),
    fields: undefined,
    type: "CoordinatorReviewItem",
  });
}
