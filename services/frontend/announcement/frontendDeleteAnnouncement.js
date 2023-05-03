import axios from "axios";

export default async function frontendDeleteAnnouncement(id) {
  try {
    const announcement = await axios.delete(`/api/announcement/${id}`);
    return announcement.data;
  } catch (error) {
    throw error;
  }
}
