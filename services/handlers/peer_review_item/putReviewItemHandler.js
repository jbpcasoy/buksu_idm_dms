import userAbility from "@/services/abilities/defineAbility";
import readPeerReviewItem from "@/services/api/peer_review_item/readPeerReviewItem";
import updatePeerReviewItem from "@/services/api/peer_review_item/updatePeerReviewItem";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putReviewItemHandler(req, res) {
  const { answer } = req.body;
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);
  async function findSubject({ id }) {
    const subject = await readPeerReviewItem({
      id,
      ability: ability,
    });
    return subject;
  }

  const peerReviewItem = await findSubject({ id });
  const caslSubject = subject("PeerReviewItem", peerReviewItem);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) => rule.fields || ["answer"],
  });
  const data = _.pick({ answer }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const peerReviewItem = await updatePeerReviewItem(id, data);
      return res.status(200).json(peerReviewItem);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "PeerReviewItem",
  });
}
