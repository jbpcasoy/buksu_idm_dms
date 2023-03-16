import axios from "axios";

export default async function frontendDeleteChairpersonSuggestionItem(id) {
  try {
    const chairpersonSuggestionItem = await axios.delete(
      `/api/chairperson_suggestion_item/${id}`
    );
    return chairpersonSuggestionItem;
  } catch (error) {
    throw error;
  }
}
