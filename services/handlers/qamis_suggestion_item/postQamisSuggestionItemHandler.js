import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestion from "@/services/api/qamis_suggestion/readQamisSuggestion";
import createQamisSuggestionItem from "@/services/api/qamis_suggestion_item/createQamisSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import * as Yup from "yup";

export default async function postQamisSuggestionItemHandler(req, res) {
  const validator = Yup.object({
    qamisSuggestionId: Yup.string().required(), number: Yup.number().required(), value: Yup.string().required(), pageNumber: Yup.number().required(), actionTaken: Yup.string().optional(), actionPageNumber: Yup.string().optional()
  })
  await validator.validate(req.body)
  const { qamisSuggestionId, number, value, pageNumber, actionTaken, actionPageNumber } = req.body;

  const user = await getServerUser(req, res);
  const qamisSuggestion = await readQamisSuggestion({
    id: qamisSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const qamisSuggestionItem = await createQamisSuggestionItem({
        qamisSuggestionId,
        value,
        pageNumber,
        number,
        actionTaken,
        actionPageNumber
      });

      return res.status(201).json(qamisSuggestionItem);
    },
    action: "connectToQamisSuggestionItem",
    subject: subject("QamisSuggestion", qamisSuggestion),
    fields: undefined,
    type: "QamisSuggestion",
  });
}
