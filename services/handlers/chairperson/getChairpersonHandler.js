import userAbility from "@/services/abilities/defineAbility";
import readChairperson from "@/services/api/chairperson/readChairperson";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const chairperson = await readChairperson({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(chairperson);
}
