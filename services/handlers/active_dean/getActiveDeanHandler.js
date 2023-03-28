import readActiveDean from "@/services/api/active_dean/readActiveDean";

export default async function getActiveDeanHandler(req, res) {
  const { id } = req.query;

  const activeDean = await readActiveDean(id);
  return res.status(200).json(activeDean);
}
