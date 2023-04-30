import userAbility from "@/services/abilities/defineAbility";
import readPeerSuggestionItem from "@/services/api/peer_suggestion_item/readPeerSuggestionItem";
import updatePeerSuggestionItem from "@/services/api/peer_suggestion_item/updatePeerSuggestionItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putPeerSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, actionTaken, remarks } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readPeerSuggestionItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const peerSuggestionItem = await findSubject({ id });
  const caslSubject = subject("PeerSuggestionItem", peerSuggestionItem);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) =>
      rule.fields || ["value", "pageNumber", "remarks", "actionTaken"],
  });
  const data = _.pick({ value, pageNumber, remarks, actionTaken }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerSuggestionItem = await updatePeerSuggestionItem(id, data);
      return res.status(200).json(peerSuggestionItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "PeerSuggestionItem",
  });
}
