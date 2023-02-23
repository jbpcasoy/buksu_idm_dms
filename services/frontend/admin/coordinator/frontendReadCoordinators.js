import axios from "axios";

export default async function frontendReadCoordinators({ limit, page }) {
  try {
    const coordinators = await axios.get("/api/coordinator", {
      params: {
        limit,
        page,
      },
    });

    return coordinators.data;
  } catch (error) {
    throw error;
  }
}
