import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestionItem from "@/services/api/qamis_suggestion_item/readQamisSuggestionItem";
import updateQamisSuggestionItem from "@/services/api/qamis_suggestion_item/updateQamisSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putQamisSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, actionTaken, actionPageNumber, number } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readQamisSuggestionItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const qamisSuggestionItem = await findSubject({ id });
  const caslSubject = subject("QamisSuggestionItem", qamisSuggestionItem);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) =>
      rule.fields || [
        "value",
        "pageNumber",
        "actionTaken",
        "actionPageNumber",
        "number",
      ],
  });
  const data = _.pick({ value, pageNumber, actionTaken, actionPageNumber, number }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const qamisSuggestionItem = await updateQamisSuggestionItem(id, data);
      return res.status(200).json(qamisSuggestionItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "QamisSuggestionItem",
  });
}
