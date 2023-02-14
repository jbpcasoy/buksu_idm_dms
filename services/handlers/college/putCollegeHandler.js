import updateCollege from "@/services/api/college/updateCollege";

export default async function putCollegeHandler(req, res) {
  const { name } = req.body;
  const { id } = req.query;

  const college = await updateCollege(id, {
    name,
  });

  return res.status(200).json(college);
}
