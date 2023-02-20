import readCoordinators from "@/services/api/coordinator/readCoordinators";

export default async function getCoordinatorsHandler(req, res) {
  const { limit, page } = req.query;

  const coordinators = await readCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  res.status(200).json(coordinators);
}
