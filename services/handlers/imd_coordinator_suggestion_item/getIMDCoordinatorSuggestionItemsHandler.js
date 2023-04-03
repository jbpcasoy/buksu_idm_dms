import readIMDCoordinatorSuggestionItems from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItems";

export default async function getIMDCoordinatorSuggestionItemsHandler(
  req,
  res
) {
  const { limit, page } = req.query;

  const iMDCoordinatorSuggestionItems = await readIMDCoordinatorSuggestionItems(
    { limit: parseInt(limit), page: parseInt(page) }
  );
  return res.status(200).json(iMDCoordinatorSuggestionItems);
}
