import readActiveCoordinator from "@/services/api/active_coordinator/readActiveCoordinator";

export default async function getActiveCoordinatorHandler(req, res) {
  const { id } = req.query;

  const activeCoordinator = await readActiveCoordinator(id);
  return res.status(200).json(activeCoordinator);
}
