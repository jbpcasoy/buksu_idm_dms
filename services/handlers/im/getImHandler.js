import userAbility from "@/services/abilities/defineAbility";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getImHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);
  const foundIM = await readIM({ id, ability: await userAbility(user) });

  return res.status(200).json(foundIM);
}
