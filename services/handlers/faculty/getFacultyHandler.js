import readFaculty from "@/services/api/faculty/readFaculty";

export default async function getFacultyHandler(req, res) {
  const { id } = req.query;

  const faculty = await readFaculty(id);
  return res.status(200).json(faculty);
}
