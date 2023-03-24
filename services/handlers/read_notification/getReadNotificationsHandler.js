import readReadNotifications from "@/services/api/read_notification/readReadNotifications";

export default async function getReadNotificationsHandler(req, res) {
  const { limit = 10, page = 1, notificationId } = req.query;

  const readNotifications = await readReadNotifications({
    limit: parseInt(limit),
    page: parseInt(page),
    notificationId,
  });
  return res.status(200).json(readNotifications);
}
