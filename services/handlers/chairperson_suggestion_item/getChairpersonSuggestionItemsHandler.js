import readChairpersonSuggestionItems from "@/services/api/chairperson_suggestion_item/readChairpersonSuggestionItems";

export default async function getChairpersonSuggestionItemsHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const chairpersonSuggestionItems = await readChairpersonSuggestionItems({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(chairpersonSuggestionItems);
}
