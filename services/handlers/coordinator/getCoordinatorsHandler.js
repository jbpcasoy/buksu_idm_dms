import readCoordinators from "@/services/api/coordinator/readCoordinators";

export default async function getCoordinatorsHandler(req, res) {
  const {
    limit,
    page,
    name,
    collegeName,
    departmentName,
    active,
    sortColumn = "Faculty.user.name",
    sortOrder = "asc",
  } = req.query;

  const coordinators = await readCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    collegeName,
    departmentName,
    active: active ? JSON.parse(active) : undefined,
    sortColumn,
    sortOrder,
  });

  res.status(200).json(coordinators);
}
