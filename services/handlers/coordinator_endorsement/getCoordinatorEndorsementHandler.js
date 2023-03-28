import readCoordinatorEndorsement from "@/services/api/coordinator_endorsement/readCoordinatorEndorsement";

export default async function getCoordinatorEndorsementHandler(req, res) {
  const { id } = req.query;

  const coordinatorEndorsement = await readCoordinatorEndorsement(id);
  return res.status(200).json(coordinatorEndorsement);
}
