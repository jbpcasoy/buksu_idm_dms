import readIM from "../api/im/readIM";
import updateIM from "../api/im/updateIM";

export default async function checkAndUpdateStatus(iMId) {
  const iM = await readIM(iMId);

  if (
    iM.SubmittedChairpersonSuggestion &&
    iM.SubmittedCoordinatorSuggestion &&
    iM.SubmittedPeerSuggestion
  ) {
    await updateIM(iM.id, {
      status: "DEPARTMENT_REVIEWED",
    });
  }
}
