import createIMDCoordinatorSuggestion from "@/services/api/imd_coordinator_suggestion/createIMDCoordinatorSuggestion";

export default async function postIMDCoordinatorSuggestionHandler(req, res) {
  const { iMDCoordinatorId, iMId } = req.body;

  const iMDCoordinatorSuggestion = await createIMDCoordinatorSuggestion({
    iMDCoordinatorId,
    iMId,
  });

  return res.status(201).json(iMDCoordinatorSuggestion);
}
