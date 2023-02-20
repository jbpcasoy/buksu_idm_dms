import readSeniorApproval from "@/services/api/senior_approval/readSeniorApproval";

export default async function getSeniorApprovalHandler(req, res) {
  const { id } = req.query;

  const seniorApproval = await readSeniorApproval(id);
  return res.status(200).json(seniorApproval);
}
