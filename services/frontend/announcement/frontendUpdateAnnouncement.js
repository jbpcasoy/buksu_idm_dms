import axios from "axios";

export default async function frontendUpdateAnnouncement(
  id,
  { title, description, link }
) {
  try {
    const announcement = await axios.put(`/api/announcement/${id}`, {
      title,
      description,
      link,
    });
    return announcement.data;
  } catch (err) {
    throw err;
  }
}
