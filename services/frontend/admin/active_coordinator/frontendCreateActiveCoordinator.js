import axios from "axios";

export default async function frontendCreateActiveCoordinator({
  coordinatorId,
}) {
  try {
    const activeCoordinator = await axios.post("/api/active_coordinator", {
      coordinatorId,
    });

    return activeCoordinator.data;
  } catch (error) {
    throw error;
  }
}
