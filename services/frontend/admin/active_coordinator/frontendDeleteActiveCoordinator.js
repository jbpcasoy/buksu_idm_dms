import axios from "axios";

export default async function frontendDeleteActiveCoordinator(id) {
  try {
    const activeCoordinator = await axios.delete(
      `/api/active_coordinator/${id}`
    );

    return activeCoordinator.data;
  } catch (error) {
    throw error;
  }
}
