import userAbility from "@/services/abilities/defineAbility";
import readReadNotifications from "@/services/api/read_notification/readReadNotifications";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getReadNotificationsHandler(req, res) {
  const { limit = 10, page = 1, notificationId } = req.query;
  const user = await getServerUser(req, res);

  const readNotifications = await readReadNotifications({
    limit: parseInt(limit),
    page: parseInt(page),
    notificationId,
    ability: await userAbility(user),
  });
  return res.status(200).json(readNotifications);
}
