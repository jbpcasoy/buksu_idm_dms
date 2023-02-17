import readSeniorApprovals from "@/services/api/senior_approval/readSeniorApprovals";

export default async function getSeniorApprovalsHandler(req, res) {
  const { limit, page } = req.query;

  const seniorApprovals = await readSeniorApprovals({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(seniorApprovals);
}
