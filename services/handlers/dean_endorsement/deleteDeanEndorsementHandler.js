import deleteDeanEndorsement from "@/services/api/dean_endorsement/deleteDeanEndorsement";

export default async function deleteDeanEndorsementHandler(req, res) {
  const { id } = req.query;

  const deanEndorsement = await deleteDeanEndorsement(id);
  return res.status(200).json(deanEndorsement);
}
