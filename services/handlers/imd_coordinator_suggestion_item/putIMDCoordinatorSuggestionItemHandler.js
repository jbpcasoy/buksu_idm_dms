import updateIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/updateIMDCoordinatorSuggestionItem";

export default async function putIMDCoordinatorSuggestionItemHandler(req, res) {
  const { id } = req.query;
  const { value, pageNumber, actionTaken, remarks } = req.body;

  const iMDCoordinatorSuggestionItem = await updateIMDCoordinatorSuggestionItem(
    id,
    {
      value,
      pageNumber,
      actionTaken,
      remarks,
    }
  );
  return res.status(200).json(iMDCoordinatorSuggestionItem);
}
