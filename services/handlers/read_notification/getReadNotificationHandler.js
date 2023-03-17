import readReadNotification from "@/services/api/read_notification/readReadNotification";

export default async function getReadNotificationHandler(req, res) {
  const { id } = req.query;

  const readNotification = await readReadNotification(id);
  return res.status(200).json(readNotification);
}
