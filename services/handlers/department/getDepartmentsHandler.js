import readDepartments from "@/services/api/department/readDepartments";

export default async function getDepartmentsHandler(req, res) {
  const { limit, page, name, collegeName, collegeId } = req.query;

  const departments = await readDepartments({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    collegeName,
    collegeId,
  });

  return res.status(200).json(departments);
}
