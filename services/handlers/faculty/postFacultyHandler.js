import createFaculty from "@/services/api/faculty/createFaculty";

export default async function postFacultyHandler(req, res) {
  const { userId, departmentId } = req.body;

  const faculty = await createFaculty({ userId, departmentId });

  return res.status(201).json(faculty);
}
