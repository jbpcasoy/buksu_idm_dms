import axios from "axios";

export default async function frontendReadActiveFaculties({
  limit,
  page,
  name,
  departmentId,
  sortOrder,
  sortColumn,
}) {
  try {
    const activeFaculties = await axios.get("/api/active_faculty", {
      params: {
        limit,
        page,
        name,
        departmentId,
        sortOrder,
        sortColumn,
      },
    });

    return activeFaculties.data;
  } catch (error) {
    throw error;
  }
}
