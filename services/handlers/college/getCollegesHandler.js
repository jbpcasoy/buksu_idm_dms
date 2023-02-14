import readColleges from "@/services/api/college/readColleges";

export default async function getCollegesHandler(req, res) {
  const { page, limit } = req.query;

  const colleges = await readColleges({
    page: parseInt(page),
    limit: parseInt(limit),
  });

  return res.status(200).json(colleges);
}
