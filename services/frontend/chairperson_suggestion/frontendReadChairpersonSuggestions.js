import axios from "axios";

export default async function frontendReadChairpersonSuggestions({
  submittedChairpersonReviewId,
}) {
  try {
    const chairpersonSuggestions = await axios.get(
      "/api/chairperson_suggestion",
      {
        params: {
          submittedChairpersonReviewId,
        },
      }
    );
    return chairpersonSuggestions.data;
  } catch (error) {
    throw error;
  }
}
