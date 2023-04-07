import axios from "axios";

export default async function frontendSubmitIMForIMDCoordinatorEndorsement({
  iMId,
}) {
  try {
    const iM = await axios.put(`/api/im/${iMId}`, {
      status: "CITL_REVISED",
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
