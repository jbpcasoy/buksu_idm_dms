import axios from "axios";

export default async function frontendReadColleges(limit, page) {
  // TODO implement

  try {
    const colleges = await axios.get("/api/college", {
      params: {
        limit,
        page,
      },
    });

    return colleges.data;
  } catch (error) {
    throw error;
  }
}
