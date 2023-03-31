import readIMDCoordinator from "@/services/api/imd_coordinator/readIMDCoordinator";

export default async function getIMDCoordinatorHandler(req, res) {
  const { limit, page } = req.query;

  const iMDCoordinator = await readIMDCoordinator({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(iMDCoordinator);
}
