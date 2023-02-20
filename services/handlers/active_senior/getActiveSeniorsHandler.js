import getActiveSeniors from "@/services/api/active_senior/getActiveSeniors";

export default async function getActiveSeniorsHandler(req, res) {
  const { limit, page } = req.query;

  const activeSeniors = await getActiveSeniors({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(activeSeniors);
}
