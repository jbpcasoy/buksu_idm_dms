import readIMDCoordinators from "@/services/api/imd_coordinator/readIMDCoordinators";

export default async function getIMDCoordinatorsHandler(req, res) {
  const { limit, page } = req.query;

  const iMDCoordinator = await readIMDCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(iMDCoordinator);
}
