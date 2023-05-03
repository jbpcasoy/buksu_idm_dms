import axios from "axios";

export default async function frontendCreateActiveFaculty({ facultyId }) {
  try {
    const activeFaculty = await axios.post("/api/active_faculty", {
      facultyId,
    });

    return activeFaculty.data;
  } catch (error) {
    throw error;
  }
}
