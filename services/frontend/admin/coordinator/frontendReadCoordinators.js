import axios from "axios";

export default async function frontendReadCoordinators({
  limit,
  page,
  name,
  email,
  collegeName,
  departmentName,
  active,
  sortColumn,
  sortOrder,
}) {
  try {
    const coordinators = await axios.get("/api/coordinator", {
      params: {
        limit,
        page,
        name,
        email,
        collegeName,
        departmentName,
        active,
        sortColumn,
        sortOrder,
      },
    });

    return coordinators.data;
  } catch (error) {
    throw error;
  }
}
