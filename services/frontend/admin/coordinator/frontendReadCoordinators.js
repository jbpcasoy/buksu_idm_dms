import axios from "axios";

export default async function frontendReadCoordinators({
  limit,
  page,
  name,
  collegeName,
  departmentName,
}) {
  try {
    const coordinators = await axios.get("/api/coordinator", {
      params: {
        limit,
        page,
        name,
        collegeName,
        departmentName,
      },
    });

    return coordinators.data;
  } catch (error) {
    throw error;
  }
}
