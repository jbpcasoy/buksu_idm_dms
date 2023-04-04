import readIMDCoordinatorEndorsements from "@/services/api/imd_coordinator_endorsement/readIMDCoordinatorEndorsements";

export default async function getIMDCoordinatorEndorsementsHandler(req, res) {
  const { limit, page } = await req.query;

  const iMDCoordinatorEndorsements = await readIMDCoordinatorEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(iMDCoordinatorEndorsements);
}
