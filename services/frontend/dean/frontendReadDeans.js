import axios from "axios";

export default async function frontendReadDeans({
  limit,
  page,
  name,
  email,
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
        email,
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
