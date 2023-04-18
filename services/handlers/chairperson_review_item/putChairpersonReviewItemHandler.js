import userAbility from "@/services/abilities/defineAbility";
import readChairpersonReviewItem from "@/services/api/chairperson_review_item/readChairpersonReviewItem";
import updateChairpersonReviewItem from "@/services/api/chairperson_review_item/updateChairpersonReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putChairpersonReviewItemHandler(req, res) {
  const { answer } = req.body;
  const { id } = req.query;
  const user = await getServerUser(req, res);
  const ability = await userAbility(user);
  async function findSubject({ id }) {
    const subject = await readChairpersonReviewItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const chairpersonReviewItem = await findSubject({ id });
  const caslSubject = subject("ChairpersonReviewItem", chairpersonReviewItem);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) => rule.fields || ["answer"],
  });
  const data = _.pick({ answer }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonReviewItem = await updateChairpersonReviewItem(id, data);
      return res.status(200).json(chairpersonReviewItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "ChairpersonReviewItem",
  });
}
