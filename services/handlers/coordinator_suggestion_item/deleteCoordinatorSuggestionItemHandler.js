import deleteCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/deleteCoordinatorSuggestionItem";

export default async function deleteCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const coordinatorSuggestionItem = await deleteCoordinatorSuggestionItem(id);
  return res.status(200).json(coordinatorSuggestionItem);
}
