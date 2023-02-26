import axios from "axios";

export default async function frontendDeleteCoordinator(id) {
  try {
    const coordinator = await axios.delete(`/api/coordinator/${id}`);

    return coordinator;
  } catch (error) {
    throw error;
  }
}
