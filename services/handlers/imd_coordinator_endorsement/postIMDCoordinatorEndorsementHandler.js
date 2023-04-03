import createIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/createIMDCoordinatorEndorsement";

export default async function postIMDCoordinatorEndorsementHandler(req, res) {
  const { iMId, iMDCoordinatorId, submittedIMDCoordinatorSuggestionId } =
    req.body;

  const iMDCoordinatorEndorsement = await createIMDCoordinatorEndorsement({
    iMId,
    iMDCoordinatorId,
    submittedIMDCoordinatorSuggestionId,
  });
  return res.status(201).json(iMDCoordinatorEndorsement);
}
