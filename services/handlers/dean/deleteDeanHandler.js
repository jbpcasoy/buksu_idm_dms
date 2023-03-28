import deleteDean from "@/services/api/dean/deleteDean";

export default async function deleteDeanHandler(req, res) {
  const { id } = req.query;

  const dean = await deleteDean(id);
  return res.status(200).json(dean);
}
