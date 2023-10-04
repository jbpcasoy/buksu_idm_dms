import userAbility from "@/services/abilities/defineAbility";
import readQamisSuggestion from "@/services/api/qamis_suggestion/readQamisSuggestion";
import createSubmittedQamisSuggestion from "@/services/api/submitted_qamis_suggestion/createSubmittedQamisSuggestion";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import * as Yup from "yup";

export default async function postSubmittedQamisSuggestionHandler(req, res) {

  const validator = Yup.object({
    qamisSuggestionId: Yup.string().required()
  })
  await validator.validate(validator.cast(req.body))

  const { qamisSuggestionId } = req.body;

  const user = await getServerUser(req, res);
  const qamisSuggestion = await readQamisSuggestion({
    id: qamisSuggestionId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const submittedQamisSuggestion = await createSubmittedQamisSuggestion({
        qamisSuggestionId,
        ability: await userAbility(user),
      });
      return res.status(201).json(submittedQamisSuggestion);
    },
    action: "connectToSubmittedQamisSuggestion",
    subject: subject("QamisSuggestion", qamisSuggestion),
    fields: undefined,
    type: "QamisSuggestion",
  });
}
