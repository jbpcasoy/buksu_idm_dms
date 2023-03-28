import axios from "axios";

export default async function frontendCreateCoordinatorEndorsement({
  iMId,
  coordinatorId,
}) {
  try {
    const coordinatorEndorsement = await axios.post(
      "/api/coordinator_endorsement",
      {
        iMId,
        coordinatorId,
      }
    );
    return coordinatorEndorsement.data;
  } catch (error) {
    throw error;
  }
}
