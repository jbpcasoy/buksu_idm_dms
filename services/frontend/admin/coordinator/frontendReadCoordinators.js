import axios from "axios";

export default async function frontendReadCoordinators({
  limit,
  page,
  name,
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
