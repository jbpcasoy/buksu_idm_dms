import userAbility from "@/services/abilities/defineAbility";
import readNotification from "@/services/api/notification/readNotification";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getNotificationHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const notification = await readNotification({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(notification);
}
