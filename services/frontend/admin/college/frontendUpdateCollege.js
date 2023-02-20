import axios from "axios";

export default async function frontendUpdateCollege(id, { name }) {
  try {
    const college = await axios.put(`/api/college/${id}`, {
      name,
    });

    return college.data;
  } catch (error) {
    throw error;
  }
}
