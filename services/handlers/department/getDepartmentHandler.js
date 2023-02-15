import readDepartment from "@/services/api/department/readDepartment";

export default async function getDepartmentHandler(req, res) {
  const { id } = req.query;

  const department = await readDepartment(id);

  return res.status(200).json(department);
}
