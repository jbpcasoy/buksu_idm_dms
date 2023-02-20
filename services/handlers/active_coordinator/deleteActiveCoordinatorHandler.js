import deleteActiveCoordinator from "@/services/api/active_coordinator/deleteActiveCoordinator";

export default async function deleteActiveCoordinatorHandler(req, res) {
  const { id } = req.query;

  const activeCoordinator = await deleteActiveCoordinator(id);
  return res.status(200).json(activeCoordinator);
}
