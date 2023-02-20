import createChairpersonApproval from "@/services/api/chairperson_approval/createChairpersonApproval";

export default async function postChairpersonApprovalHandler(req, res) {
  const { departmentApprovalId, chairpersonId } = req.body;

  const chairpersonApproval = await createChairpersonApproval({
    departmentApprovalId,
    chairpersonId,
  });
  return res.status(201).json(chairpersonApproval);
}
