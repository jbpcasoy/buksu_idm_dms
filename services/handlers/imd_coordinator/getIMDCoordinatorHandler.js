import readIMDCoordinator from "@/services/api/imd_coordinator/readIMDCoordinator";

export default async function getIMDCoordinatorHandler(req, res) {
  const { id } = req.query;

  const iMDCoordinator = await readIMDCoordinator(id);
  return res.status(200).json(iMDCoordinator);
}
