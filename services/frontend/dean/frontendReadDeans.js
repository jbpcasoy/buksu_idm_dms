import axios from "axios";

export default async function frontendReadDeans({
  limit,
  page,
  name,
  departmentName,
  collegeName,
  active,
  sortColumn,
  sortOrder,
}) {
  try {
    const deans = await axios.get("/api/dean", {
      params: {
        limit,
        page,
        name,
        departmentName,
        collegeName,
        active,
        sortColumn,
        sortOrder,
      },
    });

    return deans.data;
  } catch (error) {
    throw error;
  }
}
