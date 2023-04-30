import readIM from "../api/im/readIM";
import updateIM from "../api/im/updateIM";

export default async function checkAndUpdateStatus({ iMId, ability }) {
  const iM = await readIM({ id: iMId, ability });

  if (
    iM.SubmittedChairpersonSuggestion &&
    iM.SubmittedCoordinatorSuggestion &&
    iM.SubmittedPeerSuggestion
  ) {
    await updateIM(
      iM.id,
      {
        status: "DEPARTMENT_REVIEWED",
      },
      ability
    );
  }
}
