import axios from "axios";

export default async function frontendReadActiveFaculty(id) {
  try {
    const activeFaculty = await axios.get(`/api/active_faculty/${id}`);
    return activeFaculty.data;
  } catch (error) {
    throw error;
  }
}
