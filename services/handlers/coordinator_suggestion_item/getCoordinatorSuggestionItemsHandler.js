import readCoordinatorSuggestionItems from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItems";

export default async function getCoordinatorSuggestionItemsHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const coordinatorSuggestionItems = await readCoordinatorSuggestionItems({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(coordinatorSuggestionItems);
}
