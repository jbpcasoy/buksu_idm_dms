import createPeerApproval from "@/services/api/peer_approval/createPeerApproval";

export default async function postPeerApprovalHandler(req, res) {
  const { departmentApprovalId, facultyId } = req.body;

  const peerApproval = await createPeerApproval({
    departmentApprovalId,
    facultyId,
  });
  return res.status(201).json(peerApproval);
}
