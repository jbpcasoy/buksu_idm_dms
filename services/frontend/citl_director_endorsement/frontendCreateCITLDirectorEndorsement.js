import axios from "axios";

export default async function frontendCreateCITLDirectorEndorsement({
  iMDCoordinatorEndorsementId,
}) {
  try {
    const cITLDirectorEndorsement = await axios.post(
      "/api/citl_director_endorsement",
      {
        iMDCoordinatorEndorsementId,
      }
    );
    return cITLDirectorEndorsement.data;
  } catch (error) {
    throw error;
  }
}
