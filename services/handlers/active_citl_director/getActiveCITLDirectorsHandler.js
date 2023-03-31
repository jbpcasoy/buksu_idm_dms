import readActiveCITLDirectors from "@/services/api/active_citl_director/readActiveCITLDirectors";

export default async function getActiveCITLDirectorsHandler(req, res) {
  const { limit, page } = req.query;

  const activeCITLDirectors = await readActiveCITLDirectors({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(activeCITLDirectors);
}
