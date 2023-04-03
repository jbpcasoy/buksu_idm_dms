import readIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/readIMDCoordinatorSuggestionItem";

export default async function getIMDCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;

  const iMDCoordinatorSuggestionItem = await readIMDCoordinatorSuggestionItem(
    id
  );
  return res.status(200).json(iMDCoordinatorSuggestionItem);
}
