import readCoordinatorSuggestions from "@/services/api/coordinator_suggestion/readCoordinatorSuggestions";

export default async function getCoordinatorSuggestionHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const coordinatorSuggestion = await readCoordinatorSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(coordinatorSuggestion);
}
