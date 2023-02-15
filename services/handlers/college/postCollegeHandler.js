import createCollege from "@/services/api/college/createCollege";

export default async function postCollegeHandler(req, res) {
  const { name } = req.body;

  const college = await createCollege({ name });

  return res.status(201).json(college);
}
