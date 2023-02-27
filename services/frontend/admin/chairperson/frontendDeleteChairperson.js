import axios from "axios";

export default async function frontendDeleteChairperson(id) {
  try {
    const chairperson = await axios.delete(`/api/chairperson/${id}`);

    return chairperson;
  } catch (error) {
    throw error;
  }
}
