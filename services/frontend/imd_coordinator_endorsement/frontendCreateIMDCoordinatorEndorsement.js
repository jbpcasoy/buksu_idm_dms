import axios from "axios";

export default async function frontendCreateIMDCoordinatorEndorsement({
  submittedIMDCoordinatorSuggestionId,
}) {
  try {
    const iMDCoordinatorEndorsement = await axios.post(
      "/api/imd_coordinator_endorsement",
      {
        submittedIMDCoordinatorSuggestionId,
      }
    );
    return iMDCoordinatorEndorsement.data;
  } catch (error) {
    throw error;
  }
}
