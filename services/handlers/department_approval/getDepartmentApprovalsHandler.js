import readDepartmentApprovals from "@/services/api/department_approval/readDepartmentApprovals";

export default async function getDepartmentApprovalsHandler(req, res) {
  const { limit, page } = req.query;

  const departmentApprovals = await readDepartmentApprovals({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(departmentApprovals);
}
