import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createReadNotification from "@/services/api/read_notification/createReadNotification";
import { getServerSession } from "next-auth";

export default async function postReadNotificationHandler(req, res) {
  const { notificationId } = req.body;

  const session = await getServerSession(req, res, authOptions);
  const readNotification = await createReadNotification({
    notificationId,
    userId: session.user.id,
  });
  return res.status(201).json(readNotification);
}
