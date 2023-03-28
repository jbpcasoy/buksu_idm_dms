import createCoordinatorEndorsement from "@/services/api/coordinator_endorsement/createCoordinatorEndorsement";

export default async function postCoordinatorEndorsementHandler(req, res) {
  const { iMId, coordinatorId } = req.body;

  const coordinatorEndorsement = await createCoordinatorEndorsement({
    iMId,
    coordinatorId,
  });
  return res.status(201).json(coordinatorEndorsement);
}
