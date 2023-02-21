import axios from "axios";

export default async function frontendReadFaculties({ limit, page }) {
  try {
    const faculties = await axios.get("/api/faculty", {
      params: {
        limit,
        page,
      },
    });

    return faculties.data;
  } catch (error) {
    throw error;
  }
}
