import axios from "axios";

export default async function frontendCreateFaculty({ userId, departmentId }) {
  try {
    const faculty = await axios.post("/api/faculty", {
      userId,
      departmentId,
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
