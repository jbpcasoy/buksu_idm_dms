import readPeerApprovals from "@/services/api/peer_approval/readPeerApprovals";

export default async function getPeerApprovalsHandler(req, res) {
  const { limit = 10, page = 1 } = req;

  const peerApprovals = await readPeerApprovals({ limit, page });
  return res.status(200).json(peerApprovals);
}
