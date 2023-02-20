import axios from "axios";

export default async function frontendReadColleges({ limit, page, name }) {
  try {
    const colleges = await axios.get("/api/college", {
      params: {
        limit,
        page,
        name,
      },
    });

    return colleges.data;
  } catch (error) {
    throw error;
  }
}
