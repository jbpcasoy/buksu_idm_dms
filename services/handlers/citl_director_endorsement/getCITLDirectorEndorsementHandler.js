import readCITLDirectorEndorsement from "@/services/api/citl_director_endorsement/readCITLDirectorEndorsement";

export default async function getCITLDirectorEndorsementHandler(req, res) {
  const { id } = req.query;

  const cITLDirectorEndorsement = await readCITLDirectorEndorsement(id);
  return res.status(200).json(cITLDirectorEndorsement);
}
