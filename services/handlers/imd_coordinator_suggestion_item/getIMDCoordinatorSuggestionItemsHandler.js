import readIMDCoordinatorSuggestionItems from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItems";

export default async function getIMDCoordinatorSuggestionItemsHandler(
  req,
  res
) {
  const { limit, page, iMDCoordinatorSuggestionId } = req.query;

  const iMDCoordinatorSuggestionItems = await readIMDCoordinatorSuggestionItems(
    {
      limit: limit ? parseInt(limit) : undefined,
      page: page ? parseInt(page) : undefined,
      iMDCoordinatorSuggestionId,
    }
  );
  return res.status(200).json(iMDCoordinatorSuggestionItems);
}
