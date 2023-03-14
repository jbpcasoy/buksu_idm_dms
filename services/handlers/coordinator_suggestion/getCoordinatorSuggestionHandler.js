import readCoordinatorSuggestion from "@/services/api/coordinator_suggestion/readCoordinatorSuggestion";

export default async function getCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;

  const coordinatorSuggestions = await readCoordinatorSuggestion(id);
  return res.status(200).json(coordinatorSuggestions);
}
