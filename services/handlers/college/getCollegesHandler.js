import readColleges from "@/services/api/college/readColleges";

export default async function getCollegesHandler(req, res) {
  const {
    page,
    limit,
    name,
    sortColumn = "name",
    sortOrder = "asc",
  } = req.query;

  const colleges = await readColleges({
    page: parseInt(page),
    limit: parseInt(limit),
    name,
    sortColumn,
    sortOrder,
  });

  return res.status(200).json(colleges);
}
