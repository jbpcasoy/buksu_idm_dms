import axios from "axios";

export default async function frontendCreateActiveCITLDirector({
  cITLDirectorId,
}) {
  try {
    const activeCITLDirector = await axios.post("/api/active_citl_director", {
      cITLDirectorId,
    });
    return activeCITLDirector.data;
  } catch (error) {
    throw error;
  }
}
