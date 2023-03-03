import deletePeerApproval from "@/services/api/peer_approval/deletePeerApproval";

export default async function deletePeerApprovalHandler(req, res) {
  const { id } = req.query;

  const peerApproval = await deletePeerApproval(id);
  return res.status(200).json(peerApproval);
}
