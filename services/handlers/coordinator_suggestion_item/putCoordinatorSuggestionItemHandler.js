import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItem";
import updateCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/updateCoordinatorSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { actionTaken, pageNumber, remarks, value } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readCoordinatorSuggestionItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const coordinatorSuggestionItem = await findSubject({ id });
  const caslSubject = subject(
    "CoordinatorSuggestionItem",
    coordinatorSuggestionItem
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
      const coordinatorSuggestionItem = await updateCoordinatorSuggestionItem(
        id,
        data
      );
      return res.status(200).json(coordinatorSuggestionItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "CoordinatorSuggestionItem",
  });
}
