import readDeans from "@/services/api/dean/readDeans";

export default async function getDeansHandler(req, res) {
  const { limit, page } = req.query;

  const deans = await readDeans({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(deans);
}
