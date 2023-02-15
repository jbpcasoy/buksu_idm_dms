import deleteFaculty from "@/services/api/faculty/deleteFaculty";

export default async function deleteFacultyHandler(req, res) {
  const { id } = req.query;

  const faculty = await deleteFaculty(id);

  return res.status(200).json(faculty);
}
