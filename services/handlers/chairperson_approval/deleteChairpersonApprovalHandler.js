import deleteChairpersonApproval from "@/services/api/chairperson_approval/deleteChairpersonApproval";

export default async function deleteChairpersonApprovalHandler(req, res) {
  const { id } = req.query;

  const chairpersonApproval = await deleteChairpersonApproval(id);
  return res.status(200).json(chairpersonApproval);
}
