import createSubmittedIMDCoordinatorSuggestion from "@/services/api/submitted_imd_coordinator_suggestion/createSubmittedIMDCoordinatorSuggestion";

export default async function postSubmittedIMDCoordinatorSuggestionHandler(
  req,
  res
) {
  const { iMDCoordinatorSuggestionId } = req.body;

  const submittedIMDCoordinatorSuggestion =
    await createSubmittedIMDCoordinatorSuggestion({
      iMDCoordinatorSuggestionId,
    });
  return res.status(201).json(submittedIMDCoordinatorSuggestion);
}
