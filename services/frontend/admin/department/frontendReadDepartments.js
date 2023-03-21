import axios from "axios";

export default async function frontendReadDepartments({
  limit,
  page,
  name,
  collegeName,
  collegeId,
  sortColumn,
  sortOrder,
}) {
  try {
    const departments = await axios.get("/api/department", {
      params: {
        limit,
        page,
        name,
        collegeName,
        collegeId,
        sortColumn,
        sortOrder,
      },
    });

    return departments.data;
  } catch (error) {
    throw error;
  }
}
