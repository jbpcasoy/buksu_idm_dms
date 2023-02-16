import deleteCoordinator from "@/services/api/coordinator/deleteCoordinator";

export default async function deleteCoordinatorHandler(req, res) {
  const { id } = req.query;

  const coordinator = await deleteCoordinator(id);
  return res.status(200).json(coordinator);
}
