import deleteChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/deleteChairpersonSuggestionItem";

export default async function deleteChairpersonSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const chairpersonSuggestionItem = await deleteChairpersonSuggestionItem(id);
  return res.status(200).json(chairpersonSuggestionItem);
}
