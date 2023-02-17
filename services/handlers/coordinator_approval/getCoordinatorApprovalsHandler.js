import readCoordinatorApprovals from "@/services/api/coordinator_approval/readCoordinatorApprovals";

export default async function getCoordinatorApprovalsHandler(req, res) {
  const { limit, page } = req.query;

  const coordinatorApprovals = await readCoordinatorApprovals({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(201).json(coordinatorApprovals);
}
