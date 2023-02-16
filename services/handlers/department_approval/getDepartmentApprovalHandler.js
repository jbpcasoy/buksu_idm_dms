import readDepartmentApproval from "@/services/api/department_approval/readDepartmentApproval";

export default async function getDepartmentApprovalHandler(req, res) {
  const { id } = req.query;

  const departmentApproval = await readDepartmentApproval(id);
  return res.status(200).json(departmentApproval);
}
