import deleteDepartment from "@/services/handlers/department/deleteDepartment";

export default async function deleteDepartmentHandler(req, res) {
  const { id } = req.query;

  const department = await deleteDepartment(id);

  return res.status(200).json(department);
}
