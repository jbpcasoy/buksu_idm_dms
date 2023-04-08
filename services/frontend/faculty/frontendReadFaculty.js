import axios from "axios";

export default async function frontendReadFaculty(id) {
  try {
    const faculty = await axios.get(`/api/faculty/${id}`);
    return faculty.data;
  } catch (error) {
    throw error;
  }
}
