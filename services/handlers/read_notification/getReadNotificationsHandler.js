import readReadNotifications from "@/services/api/read_notification/readReadNotifications";

export default async function getReadNotificationsHandler(req, res) {
  const { limit, page } = req.query;

  const readNotifications = await readReadNotifications({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(readNotifications);
}
