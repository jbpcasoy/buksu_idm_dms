import axios from "axios";

export default async function frontendDeleteActiveCITLDirector(
  activeCITLDirectorId
) {
  try {
    const activeCITLDirector = await axios.delete(
      `/api/active_citl_director/${activeCITLDirectorId}`
    );
    return activeCITLDirector.data;
  } catch (error) {
    throw error;
  }
}
