import userAbility from "@/services/abilities/defineAbility";
import readReadNotification from "@/services/api/read_notification/readReadNotification";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getReadNotificationHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const readNotification = await readReadNotification({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(readNotification);
}
