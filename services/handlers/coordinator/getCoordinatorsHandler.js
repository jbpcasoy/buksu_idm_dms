import userAbility from "@/services/abilities/defineAbility";
import readCoordinators from "@/services/api/coordinator/readCoordinators";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorsHandler(req, res) {
  const {
    limit,
    page,
    name,
    email,
    collegeName,
    departmentName,
    active,
    sortColumn = "Faculty.user.name",
    sortOrder = "asc",
  } = req.query;

  const user = await getServerUser(req, res);

  const coordinators = await readCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    collegeName,
    departmentName,
    active: active ? JSON.parse(active) : undefined,
    sortColumn,
    sortOrder,
    email,
    ability: await userAbility(user),
  });

  res.status(200).json(coordinators);
}
