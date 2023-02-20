import readColleges from "@/services/api/college/readColleges";

export default async function getCollegesHandler(req, res) {
  const { page, limit, name } = req.query;

  const colleges = await readColleges({
    page: parseInt(page),
    limit: parseInt(limit),
    name,
  });

  return res.status(200).json(colleges);
}
