import createDepartment from "@/services/api/department/createDepartment";

export default async function postDepartmentHandler(req, res) {
  const { name, collegeId } = req.body;

  const department = await createDepartment({ name, collegeId });

  return res.status(201).json(department);
}
