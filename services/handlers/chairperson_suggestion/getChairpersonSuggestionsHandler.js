import readChairpersonSuggestions from "@/services/api/chairperson_suggestion/readChairpersonSuggestions";

export default async function getChairpersonSuggestionsHandler(req, res) {
  const { limit = 10, page = 1 } = req.query;

  const chairpersonSuggestions = await readChairpersonSuggestions({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(chairpersonSuggestions);
}
