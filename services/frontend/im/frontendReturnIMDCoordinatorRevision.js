import axios from "axios";

export default async function frontendReturnIMDCoordinatorRevision({ iMId }) {
  try {
    const iM = await axios.put(`/api/im/${iMId}`, {
      status: "CITL_REVIEWED",
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
