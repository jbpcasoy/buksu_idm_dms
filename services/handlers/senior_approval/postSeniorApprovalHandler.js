import createSeniorApproval from "@/services/api/senior_approval/createSeniorApproval";

export default async function postSeniorApprovalHandler(req, res) {
  const { departmentApprovalId, seniorId } = req.body;

  const seniorApproval = await createSeniorApproval({
    departmentApprovalId,
    seniorId,
  });
  return res.status(201).json(seniorApproval);
}
