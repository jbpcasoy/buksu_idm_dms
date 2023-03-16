import axios from "axios";

export default async function frontendCreateChairpersonSuggestion({
  submittedChairpersonReviewId,
}) {
  try {
    const chairpersonSuggestion = await axios.post(
      "/api/chairperson_suggestion",
      {
        submittedChairpersonReviewId,
      }
    );

    return chairpersonSuggestion.data;
  } catch (error) {
    throw error;
  }
}
