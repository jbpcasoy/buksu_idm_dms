import axios from "axios";

export default async function frontendReadColleges({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
}) {
  try {
    const colleges = await axios.get("/api/college", {
      params: {
        limit,
        page,
        name,
        sortColumn,
        sortOrder,
      },
    });

    return colleges.data;
  } catch (error) {
    throw error;
  }
}
