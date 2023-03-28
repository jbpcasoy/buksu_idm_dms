import readCoordinatorEndorsements from "@/services/api/coordinator_endorsement/readCoordinatorEndorsements";

export default async function getCoordinatorEndorsementsHandler(req, res) {
  const { limit, page } = req.query;

  const coordinatorEndorsements = await readCoordinatorEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(coordinatorEndorsements);
}
