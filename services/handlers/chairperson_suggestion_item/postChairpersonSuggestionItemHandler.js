import createChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/createChairpersonSuggestionItem";

export default async function postChairpersonSuggestionItemHandler(req, res) {
  const { chairpersonSuggestionId, value, remarks, pageNumber } = req.body;

  const chairpersonSuggestionItem = await createChairpersonSuggestionItem({
    chairpersonSuggestionId,
    value,
    remarks,
    pageNumber,
  });
  return res.status(201).json(chairpersonSuggestionItem);
}
