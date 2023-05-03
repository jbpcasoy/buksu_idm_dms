import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinators from "@/services/api/imd_coordinator/readIMDCoordinators";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorsHandler(req, res) {
  const {
    limit,
    page,
    name,
    sortColumn = "User.name",
    sortOrder = "asc",
    active,
    email,
  } = req.query;

  const user = await getServerUser(req, res);

  const iMDCoordinator = await readIMDCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    sortColumn,
    sortOrder,
    active: active ? JSON.parse(active) : undefined,
    email,
    ability: await userAbility(user),
  });

  return res.status(200).json(iMDCoordinator);
}
