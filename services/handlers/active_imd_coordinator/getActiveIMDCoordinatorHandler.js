import readActiveIMDCoordinators from "@/services/api/active_imd_coordinator/readActiveIMDCoordinators";

export default async function getActiveIMDCoordinatorHandler(req, res) {
  const { limit, page } = req.query;

  const activeIMDCoordinators = await readActiveIMDCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(activeIMDCoordinators);
}
