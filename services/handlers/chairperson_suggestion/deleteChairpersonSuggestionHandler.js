import deleteChairpersonSuggestion from "@/services/api/chairperson_suggestion/deleteChairpersonSuggestion";

export default async function deleteChairpersonSuggestionHandler(req, res) {
  const { id } = req.query;

  const chairpersonSuggestion = await deleteChairpersonSuggestion(id);
  return res.status(200).json(chairpersonSuggestion);
}
