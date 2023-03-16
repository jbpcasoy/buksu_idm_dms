import readCoordinatorSuggestions from "@/services/api/coordinator_suggestion/readCoordinatorSuggestions";

export default async function getCoordinatorSuggestionsHandler(req, res) {
  const { limit = 10, page = 1, submittedCoordinatorReviewId } = req.query;

  const coordinatorSuggestion = await readCoordinatorSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
    submittedCoordinatorReviewId,
  });
  return res.status(200).json(coordinatorSuggestion);
}
