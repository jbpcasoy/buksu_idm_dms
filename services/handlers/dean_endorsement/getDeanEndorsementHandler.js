import readDeanEndorsement from "@/services/api/dean_endorsement/readDeanEndorsement";

export default async function getDeanEndorsementHandler(req, res) {
  const { id } = req.query;

  const deanEndorsement = await readDeanEndorsement(id);
  return res.status(200).json(deanEndorsement);
}
