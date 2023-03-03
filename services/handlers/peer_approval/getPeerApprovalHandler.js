import readPeerApproval from "@/services/api/peer_approval/readPeerApproval";

export default async function getPeerApprovalHandler(req, res) {
  const { id } = req.query;

  const peerApproval = await readPeerApproval(id);
  return res.status(200).json(peerApproval);
}
