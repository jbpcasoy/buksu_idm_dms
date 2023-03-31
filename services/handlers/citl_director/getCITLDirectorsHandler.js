import readCITLDirectors from "@/services/api/citl_director/readCITLDirectors";

export default async function getCITLDirectorsHandler(req, res) {
  const {
    limit,
    page,
    name,
    sortColumn = "User.name",
    sortOrder = "asc",
  } = req.query;

  const cITLDirectors = await readCITLDirectors({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    sortColumn,
    sortOrder,
  });
  return res.status(200).json(cITLDirectors);
}
