import deleteSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/deleteSubmittedChairpersonSuggestion";

export default async function deleteSubmittedChairpersonSuggestionHandler(
  req,
  res
) {
  const { id } = req.query;

  const submittedChairpersonSuggestion =
    await deleteSubmittedChairpersonSuggestion(id);
  return res.status(200).json(submittedChairpersonSuggestion);
}
