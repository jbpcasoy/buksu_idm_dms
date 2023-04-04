import readIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/readIMDCoordinatorEndorsement";

export default async function getIMDCoordinatorEndorsement(req, res) {
  const { id } = req.query;

  const iMDCoordinatorEndorsement = await readIMDCoordinatorEndorsement(id);
  return res.status(200).json(iMDCoordinatorEndorsement);
}
