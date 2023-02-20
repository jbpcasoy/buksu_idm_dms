import deleteCollege from "@/services/api/college/deleteCollege";

export default async function deleteCollegeHandler(req, res) {
  const { id } = req.query;

  const college = await deleteCollege(id);

  res.status(200).json(college);
}
