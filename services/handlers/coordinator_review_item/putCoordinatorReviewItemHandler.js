import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorReviewItem from "@/services/api/coordinator_review_item/readCoordinatorReviewItem";
import updateCoordinatorReviewItem from "@/services/api/coordinator_review_item/updateCoordinatorReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putCoordinatorReviewItemHandler(req, res) {
  const { id } = req.query;
  const { answer } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);
  async function findSubject({ id }) {
    const subject = await readCoordinatorReviewItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const coordinatorReviewItem = await findSubject({ id });
  const caslSubject = subject("CoordinatorReviewItem", coordinatorReviewItem);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) => rule.fields || ["answer"],
  });
  const data = _.pick({ answer }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const updatedCoordinatorReviewItem = await updateCoordinatorReviewItem(
        id,
        data
      );
      return res.status(200).json(updatedCoordinatorReviewItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "CoordinatorReviewItem",
  });
}
