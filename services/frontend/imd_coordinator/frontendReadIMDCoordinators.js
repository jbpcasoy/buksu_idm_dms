import axios from "axios";

export default async function frontendReadIMDCoordinators({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
}) {
  try {
    const iMDCoordinators = await axios.get("/api/imd_coordinator", {
      params: {
        limit,
        page,
        name,
        sortColumn,
        sortOrder,
      },
    });
    return iMDCoordinators.data;
  } catch (error) {
    throw error;
  }
}
