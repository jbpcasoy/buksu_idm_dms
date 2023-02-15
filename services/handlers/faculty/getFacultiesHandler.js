import readFaculties from "@/services/api/faculty/readFaculties";

export default async function getFacultiesHandler(req, res) {
  const { limit, page } = req.query;

  const faculties = await readFaculties({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  res.status(200).json(faculties);
}
