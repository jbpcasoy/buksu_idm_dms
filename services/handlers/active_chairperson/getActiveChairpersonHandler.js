import userAbility from "@/services/abilities/defineAbility";
import readActiveChairperson from "@/services/api/active_chairperson/readActiveChairperson";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveChairpersonHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);

  const activeChairperson = await readActiveChairperson({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(activeChairperson);
}
