import deleteActiveSenior from "@/services/api/active_senior/deleteActiveSenior";

export default async function deleteActiveSeniorHandler(req, res) {
  const { id } = req.query;

  const activeSenior = await deleteActiveSenior(id);
  return res.status(200).json(activeSenior);
}
