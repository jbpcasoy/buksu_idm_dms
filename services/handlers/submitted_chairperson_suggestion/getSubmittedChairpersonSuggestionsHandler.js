import readSubmittedChairpersonSuggestions from "@/services/api/submitted_chairperson_suggestion/readSubmittedChairpersonSuggestions";

export default async function getSubmittedChairpersonSuggestionsHandler(
  req,
  res
) {
  const { limit, page } = req.query;

  const submittedChairpersonSuggestions =
    await readSubmittedChairpersonSuggestions({
      limit: parseInt(limit),
      page: parseInt(page),
    });
  return res.status(200).json(submittedChairpersonSuggestions);
}
