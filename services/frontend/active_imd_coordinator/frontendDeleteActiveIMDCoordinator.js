import axios from "axios";

export default async function frontendDeleteActiveIMDCoordinator(id) {
  try {
    const activeIMDCoordinator = await axios.delete(
      `/api/active_imd_coordinator/${id}`
    );
    return activeIMDCoordinator.data;
  } catch (error) {
    throw error;
  }
}
