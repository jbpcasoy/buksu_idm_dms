import axios from "axios";

export default async function frontendDeleteDean(id) {
  try {
    const dean = await axios.delete(`/api/dean/${id}`);
    return dean.data;
  } catch (error) {
    throw error;
  }
}
