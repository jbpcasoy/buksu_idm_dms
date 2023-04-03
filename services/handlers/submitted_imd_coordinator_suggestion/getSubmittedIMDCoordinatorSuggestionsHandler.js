import readSubmittedIMDCoordinatorSuggestions from "@/services/api/submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestions";

export default async function getSubmittedIMDCoordinatorSuggestionsHandler(
  req,
  res
) {
  const { limit, page } = req.query;

  const submittedIMDCoordinatorSuggestions =
    await readSubmittedIMDCoordinatorSuggestions({
      limit: parseInt(limit),
      page: parseInt(page),
    });
  return res.status(200).json(submittedIMDCoordinatorSuggestions);
}
