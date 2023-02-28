import axios from "axios";

export default async function frontendDeleteSenior(id) {
  try {
    const senior = await axios.delete(`/api/senior/${id}`);

    return senior.data;
  } catch (error) {
    throw error;
  }
}
