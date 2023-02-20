import axios from "axios";

export default async function frontendDeleteCollege(id) {
  try {
    const college = await axios.delete(`/api/college/${id}`);

    return college.data;
  } catch (error) {
    throw error;
  }
}
