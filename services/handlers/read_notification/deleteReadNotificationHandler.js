import deleteReadNotification from "@/services/api/read_notification/deleteReadNotification";

export default async function deleteReadNotificationHandler(req, res) {
  const { id } = req.query;

  const readNotification = await deleteReadNotification(id);
  return res.status(200).json(readNotification);
}
