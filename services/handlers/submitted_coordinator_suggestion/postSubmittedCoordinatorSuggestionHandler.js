import createSubmittedCoordinatorSuggestion from "@/services/api/submitted_coordinator_suggestion/createSubmittedCoordinatorSuggestion";

export default async function postSubmittedCoordinatorSuggestionHandler(
  req,
  res
) {
  const { coordinatorSuggestionId } = req.body;

  const submittedCoordinatorSuggestion =
    await createSubmittedCoordinatorSuggestion({
      coordinatorSuggestionId,
    });

  return res.status(201).json(submittedCoordinatorSuggestion);
}
