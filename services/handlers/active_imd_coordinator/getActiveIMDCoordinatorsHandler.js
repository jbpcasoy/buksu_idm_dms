import userAbility from "@/services/abilities/defineAbility";
import readActiveIMDCoordinators from "@/services/api/active_imd_coordinator/readActiveIMDCoordinators";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveIMDCoordinatorsHandler(req, res) {
  const { limit, page } = req.query;

  const user = await getServerUser(req, res);

  const activeIMDCoordinators = await readActiveIMDCoordinators({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });

  return res.status(200).json(activeIMDCoordinators);
}
