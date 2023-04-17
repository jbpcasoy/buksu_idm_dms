import userAbility from "@/services/abilities/defineAbility";
import readActiveIMDCoordinator from "@/services/api/active_imd_coordinator/readActiveIMDCoordinator";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveIMDCoordinatorHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const activeIMDCoordinator = await readActiveIMDCoordinator({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(activeIMDCoordinator);
}
