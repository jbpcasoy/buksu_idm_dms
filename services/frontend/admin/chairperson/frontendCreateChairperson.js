import axios from "axios";

export default async function frontendCreateChairperson({ facultyId }) {
  try {
    const chairperson = await axios.post("/api/chairperson", {
      facultyId,
    });

    return chairperson;
  } catch (error) {
    throw error;
  }
}
