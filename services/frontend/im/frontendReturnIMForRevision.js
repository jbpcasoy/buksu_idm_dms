import axios from "axios";

export default async function frontendReturnIMForRevision({ iMId }) {
  try {
    const iM = await axios.put(`/api/im/${iMId}`, {
      status: "DEPARTMENT_REVIEWED",
      returned: true,
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
