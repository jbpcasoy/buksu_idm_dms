import readDepartments from "@/services/api/department/readDepartments";

export default async function getDepartmentsHandler(req, res) {
  const {
    limit,
    page,
    name,
    collegeName,
    collegeId,
    sortColumn = "name",
    sortOrder = "asc",
  } = req.query;

  const departments = await readDepartments({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    collegeName,
    collegeId,
    sortColumn,
    sortOrder,
  });

  return res.status(200).json(departments);
}
