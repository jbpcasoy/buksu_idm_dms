import readCoordinators from "@/services/api/coordinator/readCoordinators";

export default async function getCoordinatorsHandler(req, res) {
  const { limit, page, name, collegeName, departmentName } = req.query;

  const coordinators = await readCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    collegeName,
    departmentName,
  });

  res.status(200).json(coordinators);
}
