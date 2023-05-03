import userAbility from "@/services/abilities/defineAbility";
import readSubmittedPeerReview from "@/services/api/submitted_peer_review/readSubmittedPeerReview";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSubmittedPeerReviewHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const submittedPeerReview = await readSubmittedPeerReview({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(submittedPeerReview);
}
