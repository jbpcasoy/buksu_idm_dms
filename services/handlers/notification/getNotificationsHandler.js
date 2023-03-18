import readNotifications from "@/services/api/notification/readNotifications";

export default async function getNotificationsHandler(req, res) {
  const { limit, page, userId } = req.query;

  const notifications = await readNotifications({
    limit: parseInt(limit),
    page: parseInt(page),
    userId,
  });
  return res.status(200).json(notifications);
}
