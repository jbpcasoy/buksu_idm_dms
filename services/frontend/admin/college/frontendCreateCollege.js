import axios from "axios";

export default async function frontendCreateCollege({ name }) {
  try {
    const college = await axios.post("/api/college", { name });

    return college.data;
  } catch (error) {
    throw error;
  }
}
