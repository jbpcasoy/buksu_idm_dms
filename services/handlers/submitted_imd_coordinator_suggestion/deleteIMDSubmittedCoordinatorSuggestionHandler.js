import deleteSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/deleteSubmittedIMDCoordinatorSuggestion";

export default async function deleteIMDSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedIMDCoordinatorSuggestion =
    await deleteSubmittedIMDCoordinatorSuggestion(id);
  return res.status(200).json(submittedIMDCoordinatorSuggestion);
}
