import axios from "axios";

export default async function frontendCreateCoordinator({ facultyId }) {
  // TODO CREATE Coordinator should accept activeFacultyId
  try {
    const coordinator = await axios.post("/api/coordinator", { facultyId });

    return coordinator;
  } catch (error) {
    throw error;
  }
}
