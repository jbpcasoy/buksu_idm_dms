import createIMDCoordinator from "@/services/api/imd_coordinator/createIMDCoordinator";

export default async function postIMDCoordinatorHandler(req, res) {
  const { userId } = req.body;

  const iMDCoordinator = await createIMDCoordinator({ userId });
  return res.status(201).json(iMDCoordinator);
}
