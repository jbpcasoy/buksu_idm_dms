import deleteIMDCoordinator from "@/services/api/imd_coordinator/deleteIMDCoordinator";

export default async function deleteIMDCoordinatorHandler(req, res) {
  const { id } = req.query;

  const iMDCoordinator = await deleteIMDCoordinator(id);
  return res.status(200).json(iMDCoordinator);
}
