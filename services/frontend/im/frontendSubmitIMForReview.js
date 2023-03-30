import axios from "axios";

export default async function frontendSubmitIMForReview({ iMId }) {
  try {
    const iM = await axios.put(`/api/im/${iMId}`, {
      status: "SUBMITTED",
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
