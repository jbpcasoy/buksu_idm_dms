import axios from "axios";

export default async function frontendDeleteIMDCoordinator(id) {
  try {
    const iMDCoordinator = await axios.delete(`/api/imd_coordinator/${id}`);
    return iMDCoordinator.data;
  } catch (error) {
    throw error;
  }
}
