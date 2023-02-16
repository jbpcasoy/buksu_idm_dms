import createDepartmentApproval from "@/services/api/department_approval/createDepartmentApproval";

export default async function postDepartmentApprovalHandler(req, res) {
  const { iMId } = req.body;

  const departmentApproval = await createDepartmentApproval({
    iMId,
  });
  return res.status(201).json(departmentApproval);
}
