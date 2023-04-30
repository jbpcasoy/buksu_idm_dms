import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItem";
import updateIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/updateIMDCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putIMDCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, actionTaken, remarks } = req.body;
  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readIMDCoordinatorSuggestionItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const iMDCoordinatorSuggestionItem = await findSubject({ id });
  const caslSubject = subject(
    "IMDCoordinatorSuggestionItem",
    iMDCoordinatorSuggestionItem
  );
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) =>
      rule.fields || ["value", "pageNumber", "remarks", "actionTaken"],
  });
  const data = _.pick({ value, pageNumber, remarks, actionTaken }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorSuggestionItem =
        await updateIMDCoordinatorSuggestionItem(id, data);
      return res.status(200).json(iMDCoordinatorSuggestionItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "IMDCoordinatorSuggestionItem",
  });
}
