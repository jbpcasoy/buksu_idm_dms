import readActiveCoordinators from "@/services/api/active_coordinator/readActiveCoordinators";

export default async function getActiveCoordinators(req, res) {
  const { limit, page } = req.query;

  const activeCoordinators = await readActiveCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(activeCoordinators);
}
