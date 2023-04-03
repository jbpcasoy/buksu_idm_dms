import readIMDCoordinatorSuggestions from "@/services/api/imd_coordinator_suggestion/readIMDCoordinatorSuggestions";

export default async function getIMDCoordinatorSuggestionsHandler(req, res) {
  const { limit, page, iMId } = req.query;

  const imdCoordinatorSuggestions = await readIMDCoordinatorSuggestions({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    iMId,
  });

  return res.status(200).json(imdCoordinatorSuggestions);
}
