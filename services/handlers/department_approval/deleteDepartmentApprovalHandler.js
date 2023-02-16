import deleteDepartmentApproval from "@/services/api/department_approval/deleteDepartmentApproval";

export default async function deleteDepartmentApprovalHandler(req, res) {
  const { id } = req.query;

  const departmentApproval = await deleteDepartmentApproval(id);
  return res.status(200).json(departmentApproval);
}
