import deleteIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/deleteIMDCoordinatorSuggestionItem";

export default async function deleteIMDCoordinatorSuggestionItemHandler(
  req,
  res
) {
  const { id } = req.query;

  const iMDCoordinatorSuggestionItem = await deleteIMDCoordinatorSuggestionItem(
    id
  );
  return res.status(200).json(iMDCoordinatorSuggestionItem);
}
