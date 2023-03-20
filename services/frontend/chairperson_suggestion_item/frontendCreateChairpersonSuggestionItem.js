import axios from "axios";

export default async function frontendCreateChairpersonSuggestionItem({
  chairpersonSuggestionId,
  value,
  remarks,
  pageNumber,
}) {
  try {
    const chairpersonSuggestionItem = await axios.post(
      "/api/chairperson_suggestion_item",
      {
        chairpersonSuggestionId,
        value,
        remarks,
        pageNumber,
      }
    );
    return chairpersonSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
