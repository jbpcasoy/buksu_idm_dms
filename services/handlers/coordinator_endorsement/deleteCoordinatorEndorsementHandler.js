import deleteCoordinatorEndorsement from "@/services/api/coordinator_endorsement/deleteCoordinatorEndorsement";

export default async function deleteCoordinatorEndorsementHandler(req, res) {
  const { id } = req.query;

  const coordinatorEndorsement = await deleteCoordinatorEndorsement(id);
  return res.status(200).json(coordinatorEndorsement);
}
