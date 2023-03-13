import readChairpersonSuggestion from "@/services/api/chairperson_suggestion/readChairpersonSuggestion";

export default async function getChairpersonSuggestionHandler(req, res) {
  const { id } = req.query;

  const chairpersonSuggestion = await readChairpersonSuggestion(id);
  return res.status(200).json(chairpersonSuggestion);
}
