import readActiveIMDCoordinator from "@/services/api/active_imd_coordinator/readActiveIMDCoordinator";

export default async function getActiveIMDCoordinatorHandler(req, res) {
  const { id } = req.query;

  const activeIMDCoordinator = await readActiveIMDCoordinator(id);
  return res.status(200).json(activeIMDCoordinator);
}
