import axios from "axios";

export default async function frontendReadReadNotification({ notificationId }) {
  try {
    const readNotifications = await axios.get("/api/read_notification", {
      params: {
        notificationId,
      },
    });
    return readNotifications.data;
  } catch (error) {
    throw error;
  }
}
