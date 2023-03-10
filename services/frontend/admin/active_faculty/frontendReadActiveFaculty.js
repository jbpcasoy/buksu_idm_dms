import axios from "axios";

export default async function frontendReadActiveFaculty({
  limit,
  page,
  name,
  departmentId,
}) {
  try {
    const activeFaculties = await axios.get("/api/active_faculty", {
      params: {
        limit,
        page,
        name,
        departmentId,
      },
    });

    return activeFaculties.data;
  } catch (error) {
    throw error;
  }
}
