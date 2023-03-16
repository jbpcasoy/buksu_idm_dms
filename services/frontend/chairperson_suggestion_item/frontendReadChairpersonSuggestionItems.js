import axios from "axios";

export default async function frontendReadChairpersonSuggestionItems({
  chairpersonSuggestionId,
}) {
  try {
    const chairpersonSuggestionItems = await axios.get(
      "/api/chairperson_suggestion_item",
      {
        params: {
          chairpersonSuggestionId,
        },
      }
    );
    return chairpersonSuggestionItems.data;
  } catch (error) {
    throw error;
  }
}
