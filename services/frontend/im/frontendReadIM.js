import axios from "axios";

export default async function frontendReadIM(id) {
  try {
    const iM = await axios.get(`/api/im/${id}`);

    return iM.data;
  } catch (error) {
    throw error;
  }
}
