import readNotification from "@/services/api/notification/readNotification";

export default async function getNotificationHandler(req, res) {
  const { id } = req.query;

  const notification = await readNotification(id);
  return res.status(200).json(notification);
}
