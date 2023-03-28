import axios from "axios";

export default async function frontendDeleteActiveDean(id) {
  try {
    const activeDean = await axios.delete(`/api/active_dean/${id}`);
    return activeDean.data;
  } catch (error) {
    throw error;
  }
}
