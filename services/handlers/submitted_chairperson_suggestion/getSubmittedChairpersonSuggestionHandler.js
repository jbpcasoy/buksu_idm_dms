import readSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/readSubmittedChairpersonSuggestion";

export default async function getSubmittedChairpersonSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedChairpersonSuggestion =
    await readSubmittedChairpersonSuggestion(id);
  return res.status(200).json(submittedChairpersonSuggestion);
}
