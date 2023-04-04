import createCITLDirectorEndorsement from "@/services/api/citl_director_endorsement/createCITLDirectorEndorsement";

export default async function postCITLDirectorEndorsementHandler(req, res) {
  const { iMDCoordinatorEndorsementId } = req.body;

  const cITLDirectorEndorsement = await createCITLDirectorEndorsement({
    iMDCoordinatorEndorsementId,
  });
  return res.status(201).json(cITLDirectorEndorsement);
}
