import axios from "axios";

export default async function frontendSubmitIMForEndorsement({ iMId }) {
  try {
    const iM = await axios.put(`/api/im/${iMId}`, {
      status: "DEPARTMENT_REVISED",
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
