import readSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/readSubmittedCoordinatorSuggestion";

export default async function getSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedCoordinatorSuggestion =
    await readSubmittedCoordinatorSuggestion(id);
  return res.status(200).json(submittedCoordinatorSuggestion);
}
