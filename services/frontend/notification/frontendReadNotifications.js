import axios from "axios";

export default async function frontendReadNotifications({
  limit,
  page,
  userId,
}) {
  try {
    const notifications = await axios.get("/api/notification", {
      params: {
        limit,
        page,
        userId,
      },
    });

    return notifications.data;
  } catch (error) {
    throw error;
  }
}
