import axios from "axios";

export default async function frontendCreateSubmittedChairpersonSuggestion({
  chairpersonSuggestionId,
}) {
  try {
    const submittedChairpersonSuggestion = await axios.post(
      "/api/submitted_chairperson_suggestion",
      {
        chairpersonSuggestionId,
      }
    );

    return submittedChairpersonSuggestion.data;
  } catch (error) {
    throw error;
  }
}
