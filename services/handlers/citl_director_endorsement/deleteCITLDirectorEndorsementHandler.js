import deleteCITLDirectorEndorsement from "@/services/api/citl_director_endorsement/deleteCITLDirectorEndorsement";

export default async function deleteCITLDirectorEndorsementHandler(req, res) {
  const { id } = req.query;

  const cITLDirectorEndorsement = await deleteCITLDirectorEndorsement(id);
  return res.status(200).json(cITLDirectorEndorsement);
}
