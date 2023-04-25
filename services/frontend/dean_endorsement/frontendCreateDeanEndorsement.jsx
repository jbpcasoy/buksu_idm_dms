import axios from "axios";

export default async function frontendCreateDeanEndorsement({
  coordinatorEndorsementId,
}) {
  try {
    const deanEndorsement = await axios.post("/api/dean_endorsement", {
      coordinatorEndorsementId,
    });

    return deanEndorsement.data;
  } catch (error) {
    throw error;
  }
}
