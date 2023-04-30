import userAbility from "@/services/abilities/defineAbility";
import readUser from "@/services/api/user/readUser";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getUserHandler(req, res) {
  const { id } = req.query;
  const serverUser = await getServerUser(req, res);

  const user = await readUser({ id, ability: await userAbility(serverUser) });

  return res.status(200).json(user);
}
