import axios from "axios";

export default async function frontendUpdateChairpersonSuggestionItem(
  id,
  { value, pageNumber, actionTaken, remarks }
) {
  try {
    const chairpersonSuggestionItem = await axios.put(
      `/api/chairperson_suggestion_item/${id}`,
      {
        value,
        pageNumber,
        actionTaken,
        remarks,
      }
    );
    return chairpersonSuggestionItem.data;
  } catch (error) {
    throw error;
  }
}
