import axios from "axios";

export default async function frontendCreateDeanEndorsement({
  deanId,
  coordinatorEndorsementId,
}) {
  try {
    const deanEndorsement = await axios.post("/api/dean_endorsement", {
      deanId,
      coordinatorEndorsementId,
    });

    return deanEndorsement.data;
  } catch (error) {
    throw error;
  }
}
