import axios from "axios";

export default async function frontendCreateActiveCoordinator({
  facultyId,
  departmentId,
}) {
  try {
    const activeCoordinator = await axios.post("/api/active_coordinator", {
      facultyId,
      departmentId,
    });

    return activeCoordinator.data;
  } catch (error) {
    throw error;
  }
}
