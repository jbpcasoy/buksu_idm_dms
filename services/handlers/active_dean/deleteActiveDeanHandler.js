import deleteActiveDean from "@/services/api/active_dean/deleteActiveDean";

export default async function deleteActiveDeanHandler(req, res) {
  const { id } = req.query;

  const activeDean = await deleteActiveDean(id);
  return res.status(200).json(activeDean);
}
