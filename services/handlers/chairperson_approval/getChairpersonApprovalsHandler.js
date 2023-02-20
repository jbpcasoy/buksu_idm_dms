import readChairpersonApprovals from "@/services/api/chairperson_approval/readChairpersonApprovals";

export default async function getChairpersonApprovalsHandler(req, res) {
  const { limit, page } = req.query;

  const chairpersonApprovals = await readChairpersonApprovals({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(chairpersonApprovals);
}
