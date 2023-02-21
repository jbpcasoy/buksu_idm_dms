import axios from "axios";

export default async function frontendReadCollege(id) {
  try {
    const college = await axios.get(`/api/college/${id}`);

    return college.data;
  } catch (error) {
    throw error;
  }
}
