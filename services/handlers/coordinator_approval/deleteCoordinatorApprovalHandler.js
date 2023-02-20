import deleteCoordinatorApproval from "@/services/api/coordinator_approval/deleteCoordinatorApproval";

export default async function deleteCoordinatorApprovalHandler(req, res) {
  const { id } = req.query;

  const coordinatorApproval = await deleteCoordinatorApproval(id);
  return res.status(200).json(coordinatorApproval);
}
