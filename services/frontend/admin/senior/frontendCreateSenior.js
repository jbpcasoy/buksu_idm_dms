import axios from "axios";

export default async function frontendCreateSenior({ facultyId }) {
  try {
    const senior = await axios.post("/api/senior", {
      facultyId,
    });

    return senior;
  } catch (error) {
    throw error;
  }
}
