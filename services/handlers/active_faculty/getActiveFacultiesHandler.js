import readActiveFaculties from "@/services/api/active_faculty/readActiveFaculties";

export default async function getActiveFacultiesHandler(req, res) {
  const { limit, page } = req.query;

  const activeFaculties = await readActiveFaculties({
    page: parseInt(page),
    limit: parseInt(limit),
  });

  return res.status(201).json(activeFaculties);
}
