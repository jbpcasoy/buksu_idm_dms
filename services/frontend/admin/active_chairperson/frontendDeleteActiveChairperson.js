import axios from "axios";

export default async function frontendDeleteActiveChairperson(id) {
  try {
    const activeChairperson = await axios.delete(
      `/api/active_chairperson/${id}`
    );

    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
