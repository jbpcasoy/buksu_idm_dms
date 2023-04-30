import userAbility from "@/services/abilities/defineAbility";
import readPeerReviewItems from "@/services/api/peer_review_item/readPeerReviewItems";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getPeerReviewItemsHandler(req, res) {
  const { limit, page, questionId, peerReviewId } = req.query;
  const user = await getServerUser(req, res);

  const peerReviewItems = await readPeerReviewItems({
    limit: limit ? parseInt(limit) : undefined,
    page: limit ? parseInt(page) : undefined,
    questionId,
    peerReviewId,
    ability: await userAbility(user),
  });
  return res.status(200).json(peerReviewItems);
}
