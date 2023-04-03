import createIMDCoordinatorSuggestionItem from "@/services/api/imd_coordinator_suggestion_item/createIMDCoordinatorSuggestionItem";

export default async function postIMDCoordinatorSuggestionItemHandler(
  req,
  res
) {
  const {
    iMDCoordinatorSuggestionId,
    value,
    pageNumber,
    actionTaken,
    remarks,
  } = req.body;

  const iMDCoordinatorSuggestionItem = await createIMDCoordinatorSuggestionItem(
    {
      iMDCoordinatorSuggestionId,
      value,
      pageNumber,
      actionTaken,
      remarks,
    }
  );
  return res.status(201).json(iMDCoordinatorSuggestionItem);
}
