import axios from "axios";

export default async function frontendReadFaculties({
  limit,
  page,
  name,
  email,
  active,
  departmentName,
  collegeName,
  sortColumn,
  sortOrder,
}) {
  try {
    const faculties = await axios.get("/api/faculty", {
      params: {
        limit,
        page,
        email,
        active,
        name,
        departmentName,
        collegeName,
        sortColumn,
        sortOrder,
      },
    });

    return faculties.data;
  } catch (error) {
    throw error;
  }
}
