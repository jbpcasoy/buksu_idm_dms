import readSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";

export default async function getSubmittedIMDCoordinatorSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedIMDCoordinatorSuggestion =
    await readSubmittedIMDCoordinatorSuggestion(id);
  return res.status(200).json(submittedIMDCoordinatorSuggestion);
}
