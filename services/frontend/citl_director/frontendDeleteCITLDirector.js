import axios from "axios";

export default async function frontendDeleteCITLDirector(cITLDirectorId) {
  try {
    const cITLDirector = await axios.delete(
      `/api/citl_director/${cITLDirectorId}`
    );
    return cITLDirector.data;
  } catch (error) {
    throw error;
  }
}
