import updateCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/updateCoordinatorSuggestionItem";

export default async function putCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { actionTaken, pageNumber, remarks, value } = req.body;

  const coordinatorSuggestionItem = await updateCoordinatorSuggestionItem(id, {
    actionTaken,
    remarks,
    pageNumber,
    value,
  });
  return res.status(200).json(coordinatorSuggestionItem);
}
