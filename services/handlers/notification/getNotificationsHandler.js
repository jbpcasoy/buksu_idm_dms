import userAbility from "@/services/abilities/defineAbility";
import readNotifications from "@/services/api/notification/readNotifications";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getNotificationsHandler(req, res) {
  const { limit, page, userId, facultyId, read } = req.query;
  const user = await getServerUser(req, res);

  const notifications = await readNotifications({
    limit: parseInt(limit),
    page: parseInt(page),
    userId,
    facultyId,
    read: read ? JSON.parse(read) : undefined,
    ability: await userAbility(user),
  });
  return res.status(200).json(notifications);
}
