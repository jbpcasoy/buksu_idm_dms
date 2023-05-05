import userAbility from "@/services/abilities/defineAbility";
import readSettings from "@/services/api/settings/readSettings";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getSettings(req, res) {
  const user = await getServerUser(req, res);

  const settings = await readSettings({
    ability: await userAbility(user),
  });
  return res.status(200).json(settings);
}
