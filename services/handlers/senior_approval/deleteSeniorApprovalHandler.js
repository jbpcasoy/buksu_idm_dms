import deleteSeniorApproval from "@/services/api/senior_approval/deleteSeniorApproval";

export default async function deleteSeniorApprovalHandler(req, res) {
  const { id } = req.query;

  const seniorApproval = await deleteSeniorApproval(id);
  return res.status(200).json(seniorApproval);
}
