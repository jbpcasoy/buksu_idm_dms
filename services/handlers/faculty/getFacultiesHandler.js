import readFaculties from "@/services/api/faculty/readFaculties";

export default async function getFacultiesHandler(req, res) {
  const {
    limit,
    page,
    name,
    departmentName,
    collegeName,
    sortColumn = "user.name",
    sortOrder = "asc",
  } = req.query;

  const faculties = await readFaculties({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
    sortColumn,
    sortOrder,
  });

  res.status(200).json(faculties);
}
