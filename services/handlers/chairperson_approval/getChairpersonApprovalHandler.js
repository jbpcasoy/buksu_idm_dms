import readChairpersonApproval from "@/services/api/chairperson_approval/readChairpersonApproval";

export default async function getChairpersonApprovalHandler(req, res) {
  const { id } = req.query;

  const chairpersonApproval = await readChairpersonApproval(id);
  return res.status(200).json(chairpersonApproval);
}
