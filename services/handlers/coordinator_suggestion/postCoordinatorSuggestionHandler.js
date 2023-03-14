import createCoordinatorSuggestion from "@/services/api/coordinator_suggestion/createCoordinatorSuggestion";

export default async function postCoordinatorSuggestionHandler(req, res) {
  const { submittedCoordinatorReviewId } = req.body;

  const coordinatorSuggestion = await createCoordinatorSuggestion({
    submittedCoordinatorReviewId,
  });
  return res.status(200).json(coordinatorSuggestion);
}
