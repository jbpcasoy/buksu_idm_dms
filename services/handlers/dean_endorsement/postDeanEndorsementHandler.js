import createDeanEndorsement from "@/services/api/dean_endorsement/createDeanEndorsement";

export default async function postDeanEndorsementHandler(req, res) {
  const { coordinatorEndorsementId, deanId } = req.body;

  const deanEndorsement = await createDeanEndorsement({ coordinatorEndorsementId, deanId });
  return res.status(201).json(deanEndorsement);
}
