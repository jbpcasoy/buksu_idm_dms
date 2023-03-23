import createSubmittedChairpersonSuggestion from "@/services/api/submitted_chairperson_suggestion/createSubmittedChairpersonSuggestion";

export default async function postSubmittedChairpersonSuggestion(req, res) {
  const { chairpersonSuggestionId } = req.body;

  const submittedChairpersonSuggestion =
    await createSubmittedChairpersonSuggestion({ chairpersonSuggestionId });
  return res.status(201).json(submittedChairpersonSuggestion);
}
