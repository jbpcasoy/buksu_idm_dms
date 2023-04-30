import userAbility from "@/services/abilities/defineAbility";
import readDean from "@/services/api/dean/readDean";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDeanHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const dean = await readDean({ id, ability: await userAbility(user) });
  return res.status(200).json(dean);
}
