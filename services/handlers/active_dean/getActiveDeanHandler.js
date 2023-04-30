import userAbility from "@/services/abilities/defineAbility";
import readActiveDean from "@/services/api/active_dean/readActiveDean";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveDeanHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const activeDean = await readActiveDean({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(activeDean);
}
