import axios from "axios";

export default async function frontendReadAnnouncements({
  limit,
  page,
  title,
  description,
  link,
  sortColumn,
  sortOrder,
}) {
  try {
    const announcements = await axios.get("/api/announcement/", {
      params: {
        limit,
        page,
        title,
        description,
        link,
        sortColumn,
        sortOrder,
      },
    });
    return announcements.data;
  } catch (err) {
    throw err;
  }
}
