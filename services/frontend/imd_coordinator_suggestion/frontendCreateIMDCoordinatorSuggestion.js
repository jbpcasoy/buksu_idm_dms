import axios from "axios";

export default async function frontendCreateIMDCoordinatorSuggestion({ iMId }) {
  try {
    const iMDCoordinatorSuggestion = await axios.post(
      "/api/imd_coordinator_suggestion",
      {
        iMId,
      }
    );
    return iMDCoordinatorSuggestion.data;
  } catch (error) {
    throw error;
  }
}
