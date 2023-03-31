import axios from "axios";

export default async function frontendCreateActiveIMDCoordinator({
  iMDCoordinatorId,
}) {
  try {
    const activeIMDCoordinator = await axios.post(
      "/api/active_imd_coordinator",
      {
        iMDCoordinatorId,
      }
    );
    return activeIMDCoordinator.data;
  } catch (error) {
    throw error;
  }
}
