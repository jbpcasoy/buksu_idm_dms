import readCollege from "@/services/api/college/readCollege";

export default async function getCollegeHandler(req, res) {
  const { name } = req.body;
  const { id } = req.query;

  const college = await readCollege(id, { name });

  return res.status(200).json(college);
}
