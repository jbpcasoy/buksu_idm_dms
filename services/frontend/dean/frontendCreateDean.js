import axios from "axios";

export default async function frontendCreateDean({ facultyId }) {
  try {
    const dean = await axios.post("/api/dean", {
      facultyId,
    });

    return dean.data;
  } catch (error) {
    throw error;
  }
}
