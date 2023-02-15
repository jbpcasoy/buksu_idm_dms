import createActiveFaculty from "@/services/api/active_faculty/createActiveFaculty";

export default async function postActiveFacultyHandler(req, res) {
  const { userId, facultyId } = req.body;

  const activeFaculty = await createActiveFaculty({ userId, facultyId });

  return res.status(201).json(activeFaculty);
}
