import createCoordinatorSuggestionItem from "@/services/api/coordinator_suggestion_item/createCoordinatorSuggestionItem";

export default async function postCoordinatorSuggestionItemHandler(req, res) {
  const { coordinatorSuggestionId, value, remarks, pageNumber } = req.body;

  const coordinatorSuggestionItem = await createCoordinatorSuggestionItem({
    coordinatorSuggestionId,
    value,
    remarks,
    pageNumber,
  });

  return res.status(201).json(coordinatorSuggestionItem);
}
