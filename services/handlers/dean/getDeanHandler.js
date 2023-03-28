import readDean from "@/services/api/dean/readDean";

export default async function getDeanHandler(req, res) {
  const { id } = req.query;

  const dean = await readDean(id);
  return res.status(200).json(dean);
}
