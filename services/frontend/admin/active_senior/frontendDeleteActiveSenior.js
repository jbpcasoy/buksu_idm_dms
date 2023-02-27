import axios from "axios";

export default async function frontendDeleteActiveSenior(id) {
  try {
    const activeSenior = await axios.delete(`/api/active_senior/${id}`);

    return activeSenior;
  } catch (error) {
    throw error;
  }
}
