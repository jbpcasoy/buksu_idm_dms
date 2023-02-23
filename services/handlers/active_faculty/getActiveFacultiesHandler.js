import readActiveFaculties from "@/services/api/active_faculty/readActiveFaculties";

export default async function getActiveFacultiesHandler(req, res) {
  const { limit, page, name } = req.query;

  const activeFaculties = await readActiveFaculties({
    page: parseInt(page),
    limit: parseInt(limit),
    name
  });

  return res.status(201).json(activeFaculties);
}
