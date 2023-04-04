import deleteIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/deleteIMDCoordinatorSuggestion";

export default async function deleteIMDCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;

  const iMDCoordinatorSuggestion = await deleteIMDCoordinatorSuggestion(id);
  return res.status(200).json(iMDCoordinatorSuggestion);
}
