import createCoordinatorApproval from "@/services/api/coordinator_approval/createCoordinatorApproval";

export default async function postCoordinatorApprovalHandler(req, res) {
  const { departmentApprovalId, coordinatorId } = req.body;

  const coordinatorApproval = await createCoordinatorApproval({
    departmentApprovalId,
    coordinatorId,
  });
  return res.status(201).json(coordinatorApproval);
}
