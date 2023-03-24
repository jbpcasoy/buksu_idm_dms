import deleteSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/deleteSubmittedCoordinatorSuggestion";

export default async function deleteSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedCoordinatorSuggestion =
    await deleteSubmittedCoordinatorSuggestion(id);
  return res.status(200).json(submittedCoordinatorSuggestion);
}
