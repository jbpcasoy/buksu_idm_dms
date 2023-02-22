import axios from "axios";

export default async function frontendDeleteActiveFaculty(id) {
  try {
    const activeFaculty = await axios.delete(`/api/active_faculty/${id}`);

    return activeFaculty.data;
  } catch (error) {
    throw error;
  }
}
