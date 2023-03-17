import readNotifications from "@/services/api/notification/readNotifications";

export default async function getNotificationsHandler(req, res) {
  const { limit, page } = req.query;

  const notifications = await readNotifications({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(notifications);
}
