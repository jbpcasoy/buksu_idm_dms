import axios from "axios";

export default async function frontendCreateActivateFaculty({
  userId,
  facultyId,
  departmentId,
}) {
  try {
    const activeFaculty = await axios.post("/api/active_faculty", {
      userId,
      facultyId,
      departmentId,
    });

    return activeFaculty.data;
  } catch (error) {
    throw error;
  }
}
