import userAbility from "@/services/abilities/defineAbility";
import readChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItem";
import updateChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/updateChairpersonSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putChairpersonSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, remarks, actionTaken } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readChairpersonSuggestionItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const chairpersonSuggestionItem = await findSubject({ id });
  const caslSubject = subject(
    "ChairpersonSuggestionItem",
    chairpersonSuggestionItem
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
      const chairpersonSuggestionItem = await updateChairpersonSuggestionItem(
        id,
        data
      );
      return res.status(200).json(chairpersonSuggestionItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "ChairpersonSuggestionItem",
  });
}
