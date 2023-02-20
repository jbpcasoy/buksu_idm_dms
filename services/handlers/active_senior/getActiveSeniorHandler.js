import getActiveSenior from "@/services/api/active_senior/getActiveSenior";

export default async function getActiveSeniorHandler(req, res) {
  const { id } = req.query;

  const activeSenior = await getActiveSenior(id);
  return res.status(200).json(activeSenior);
}
