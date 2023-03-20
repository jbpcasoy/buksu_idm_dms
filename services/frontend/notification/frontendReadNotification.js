import axios from "axios";

export default async function frontendReadNotification(id) {
  try {
    const notification = await axios.get(`/api/notification/${id}`);
    return notification.data;
  } catch (error) {
    throw error;
  }
}
