import readSubmittedCoordinatorSuggestions from "../../api/submitted_coordinator_suggestion/readSubmittedCoordinatorSuggestions";

export default async function getSubmittedCoordinatorSuggestionsHandler(
  req,
  res
) {
  const { limit, page } = req.query;

  const submittedCoordinatorSuggestions =
    await readSubmittedCoordinatorSuggestions({
      limit: parseInt(limit),
      page: parseInt(page),
    });

  return res.status(200).json(submittedCoordinatorSuggestions);
}
