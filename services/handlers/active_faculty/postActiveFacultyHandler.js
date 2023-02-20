import createActiveFaculty from "@/services/api/active_faculty/createActiveFaculty";

export default async function postActiveFacultyHandler(req, res) {
  const { userId, facultyId, departmentId } = req.body;

  const activeFaculty = await createActiveFaculty({
    userId,
    facultyId,
    departmentId,
  });

  return res.status(201).json(activeFaculty);
}
