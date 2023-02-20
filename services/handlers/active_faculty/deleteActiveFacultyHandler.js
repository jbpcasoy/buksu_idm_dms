import deleteActiveFaculty from "@/services/api/active_faculty/deleteActiveFaculty";

export default async function deleteActiveFacultyHandler(req, res) {
  const { id } = req.query;

  const activeFaculty = await deleteActiveFaculty(id);

  return res.status(200).json(activeFaculty);
}
