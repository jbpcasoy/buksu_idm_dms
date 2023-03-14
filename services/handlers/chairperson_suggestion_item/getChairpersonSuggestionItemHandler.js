import readChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItem";

export default async function getChairpersonSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const chairpersonSuggestionItem = await readChairpersonSuggestionItem(id);
  return res.status(200).json(chairpersonSuggestionItem);
}
