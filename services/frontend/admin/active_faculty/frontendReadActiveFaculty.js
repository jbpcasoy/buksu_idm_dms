import axios from "axios";

export default async function frontendReadActiveFaculty({ limit, page, name }) {
  try {
    const activeFaculties = await axios.get("/api/active_faculty", {
      params: {
        limit,
        page,
        name,
      },
    });

    return activeFaculties.data;
  } catch (error) {
    throw error;
  }
}
