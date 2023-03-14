import deleteCoordinatorSuggestion from "@/services/api/coordinator_suggestion/deleteCoordinatorSuggestion";

export default async function deleteCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;

  const coordinatorSuggestion = await deleteCoordinatorSuggestion(id);
  return res.status(200).json(coordinatorSuggestion);
}
