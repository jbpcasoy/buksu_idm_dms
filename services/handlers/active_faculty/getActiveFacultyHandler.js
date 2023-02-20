import readActiveFaculty from "@/services/api/active_faculty/readActiveFaculty";

export default async function getActiveFacultyHandler(req, res) {
  const { id } = req.query;

  const activeFaculty = await readActiveFaculty(id);
  return res.status(200).json(activeFaculty);
}
