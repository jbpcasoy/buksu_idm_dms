import userAbility from "@/services/abilities/defineAbility";
import readActiveCITLDirector from "@/services/api/active_citl_director/readActiveCITLDirector";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveCITLDirectorHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const activeCITLDirector = await readActiveCITLDirector({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(activeCITLDirector);
}
