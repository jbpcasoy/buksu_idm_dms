import readCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItem";

export default async function getCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const coordinatorSuggestionItem = await readCoordinatorSuggestionItem(id);
  return res.status(200).json(coordinatorSuggestionItem);
}
