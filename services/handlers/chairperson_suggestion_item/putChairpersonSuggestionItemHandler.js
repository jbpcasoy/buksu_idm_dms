import updateChairpersonSuggestionItem from "@/services/api/chairperson_suggestion_item/updateChairpersonSuggestionItem";

export default async function putChairpersonSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, remarks, actionTaken } = req.body;

  const chairpersonSuggestionItem = await updateChairpersonSuggestionItem(id, {
    value,
    actionTaken,
    remarks,
    pageNumber,
  });
  return res.status(200).json(chairpersonSuggestionItem);
}
