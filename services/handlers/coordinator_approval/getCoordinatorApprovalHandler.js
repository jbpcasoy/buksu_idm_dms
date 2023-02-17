import readCoordinatorApproval from "@/services/api/coordinator_approval/readCoordinatorApproval";

export default async function getCoordinatorApprovalHandler(req, res) {
  const { id } = req.query;

  const coordinatorApproval = await readCoordinatorApproval(id);
  return res.status(200).json(coordinatorApproval);
}
