import axios from "axios";

export default async function frontendDeleteFaculty(id) {
  try {
    const faculty = await axios.delete(`/api/faculty/${id}`);

    return faculty;
  } catch (error) {
    throw error;
  }
}
