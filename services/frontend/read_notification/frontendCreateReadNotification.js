import axios from "axios";

export default async function frontendCreateReadNotification({
  notificationId,
}) {
  try {
    const readNotification = await axios.post("/api/read_notification", {
      notificationId,
    });
    return readNotification;
  } catch (error) {
    throw error;
  }
}
