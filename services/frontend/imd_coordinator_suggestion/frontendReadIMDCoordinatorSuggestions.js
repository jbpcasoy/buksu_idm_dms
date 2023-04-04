import axios from "axios";

export default async function frontendReadIMDCoordinatorSuggestions({ iMId }) {
  try {
    const iMDCoordinatorSuggestions = await axios.get(
      "/api/imd_coordinator_suggestion",
      {
        params: {
          iMId,
        },
      }
    );

    return iMDCoordinatorSuggestions.data;
  } catch (error) {
    throw error;
  }
}
