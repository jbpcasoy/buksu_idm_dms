import readActiveDeans from "@/services/api/active_dean/readActiveDeans";

export default async function getActiveDeansHandler(req, res) {
  const { limit, page } = req.query;

  const activeDeans = await readActiveDeans({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(activeDeans);
}
