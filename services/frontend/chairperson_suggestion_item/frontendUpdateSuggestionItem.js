import axios from "axios";

export default async function frontendUpdateChairpersonSuggestionItem(
  id,
  { value, pageNumber, remarks }
) {
  try {
    const chairpersonSuggestionItem = await axios.put(
      `/api/chairperson_suggestion_item/${id}`,
      {
        value,
        pageNumber,
        remarks,
      }
    );
    return chairpersonSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
