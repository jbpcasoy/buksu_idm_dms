import axios from "axios";

export default async function frontendReadFaculties({
  limit,
  page,
  name,
  departmentName,
  collegeName,
}) {
  try {
    const faculties = await axios.get("/api/faculty", {
      params: {
        limit,
        page,
        name,
        departmentName,
        collegeName,
      },
    });

    return faculties.data;
  } catch (error) {
    throw error;
  }
}
