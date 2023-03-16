import readChairpersonSuggestionItems from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItems";

export default async function getChairpersonSuggestionItemsHandler(req, res) {
  const { limit, page, chairpersonSuggestionId } = req.query;

  const chairpersonSuggestionItems = await readChairpersonSuggestionItems({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    chairpersonSuggestionId,
  });
  return res.status(200).json(chairpersonSuggestionItems);
}
