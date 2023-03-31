import axios from "axios";

export default async function frontendCreateIMDCoordinator({ userId }) {
  try {
    const iMDCoordinator = await axios.post("/api/imd_coordinator", {
      userId,
    });
    return iMDCoordinator.data;
  } catch (error) {
    throw error;
  }
}
