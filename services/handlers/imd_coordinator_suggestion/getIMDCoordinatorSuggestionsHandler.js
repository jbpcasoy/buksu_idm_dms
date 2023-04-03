import readIMDCoordinatorSuggestions from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestions";

export default async function getIMDCoordinatorSuggestionsHandler(req, res) {
  const { limit, page } = req.query;

  const imdCoordinatorSuggestions = await readIMDCoordinatorSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(imdCoordinatorSuggestions);
}
