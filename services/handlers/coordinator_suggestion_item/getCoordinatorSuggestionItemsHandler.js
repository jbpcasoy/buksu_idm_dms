import readCoordinatorSuggestionItems from "@/services/api/coordinator_suggestion_item/readCoordinatorSuggestionItems";

export default async function getCoordinatorSuggestionItemsHandler(req, res) {
  const { limit, page, coordinatorSuggestionId } = req.query;

  const coordinatorSuggestionItems = await readCoordinatorSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    coordinatorSuggestionId,
  });
  return res.status(200).json(coordinatorSuggestionItems);
}
