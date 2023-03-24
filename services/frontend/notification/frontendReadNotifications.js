import axios from "axios";

export default async function frontendReadNotifications({
  limit,
  page,
  userId,
  read = false,
}) {
  try {
    const notifications = await axios.get("/api/notification", {
      params: {
        limit,
        page,
        userId,
        read,
      },
    });

    return notifications.data;
  } catch (error) {
    throw error;
  }
}
