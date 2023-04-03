import deleteIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/deleteIMDCoordinatorEndorsement";

export default async function deleteIMDCoordinatorEndorsementHandler(req, res) {
  const { id } = req.query;

  const iMDCoordinatorEndorsement = await deleteIMDCoordinatorEndorsement(id);
  return res.status(200).json(iMDCoordinatorEndorsement);
}
