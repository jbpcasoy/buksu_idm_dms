import axios from "axios";

export default async function frontendReadIMDCoordinators({
  limit,
  page,
  name,
  email,
  active,
  sortColumn,
  sortOrder,
}) {
  try {
    const iMDCoordinators = await axios.get("/api/imd_coordinator", {
      params: {
        limit,
        page,
        email,
        name,
        active,
        sortColumn,
        sortOrder,
      },
    });
    return iMDCoordinators.data;
  } catch (error) {
    throw error;
  }
}
