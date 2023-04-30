import userAbility from "@/services/abilities/defineAbility";
import readCoordinator from "@/services/api/coordinator/readCoordinator";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const coordinator = await readCoordinator({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinator);
}
