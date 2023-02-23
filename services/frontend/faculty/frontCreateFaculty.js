import axios from "axios";

export default async function frontCreateFaculty({ userId, departmentId }) {
  try {
    const faculty = await axios.post("/api/faculty", {
      userId,
      departmentId,
    });

    return faculty.data;
  } catch (error) {
    throw error;
  }
}
