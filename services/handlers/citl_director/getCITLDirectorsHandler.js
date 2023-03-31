import readCITLDirectors from "@/services/api/citl_director/readCITLDirectors";

export default async function getCITLDirectorsHandler(req, res) {
  const { limit, page } = req.query;

  const cITLDirectors = await readCITLDirectors({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(cITLDirectors);
}
