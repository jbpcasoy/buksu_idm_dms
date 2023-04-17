import userAbility from "@/services/abilities/defineAbility";
import readCITLDirector from "@/services/api/citl_director/readCITLDirector";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCITLDirectorHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const cITLDirector = await readCITLDirector({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(cITLDirector);
}
