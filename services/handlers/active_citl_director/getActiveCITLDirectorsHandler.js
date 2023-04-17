import userAbility from "@/services/abilities/defineAbility";
import readActiveCITLDirectors from "@/services/api/active_citl_director/readActiveCITLDirectors";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveCITLDirectorsHandler(req, res) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const activeCITLDirectors = await readActiveCITLDirectors({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });
  return res.status(200).json(activeCITLDirectors);
}
