import deleteActiveIMDCoordinator from "@/services/api/active_imd_coordinator/deleteActiveIMDCoordinator";

export default async function deleteActiveIMDCoordinatorHandler(req, res) {
  const { id } = req.query;

  const activeIMDCoordinator = await deleteActiveIMDCoordinator(id);
  return res.status(200).json(activeIMDCoordinator);
}
