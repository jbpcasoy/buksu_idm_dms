import readIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestion";

export default async function getIMDCoordinatorSuggestionHandler(req, res) {
  const { id } = req.query;

  const iMDCoordinatorSuggestion = await readIMDCoordinatorSuggestion(id);
  return res.status(200).json(iMDCoordinatorSuggestion);
}
