import axios from "axios";

export default async function frontendReturnIMForRevision({ iMId }) {
  try {
    const iM = await axios.put(`/api/im/${iMId}`, {
      status: "DEPARTMENT_REVIEWED",
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
