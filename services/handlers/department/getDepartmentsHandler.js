import readDepartments from "@/services/api/department/readDepartments";

export default async function getDepartmentsHandler(req, res) {
  const { limit, page } = req.query;

  const departments = await readDepartments({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(departments);
}
