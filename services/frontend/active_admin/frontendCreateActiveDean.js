import axios from "axios";

export default async function frontendCreateActiveDean({ deanId }) {
  try {
    const activeAdmin = await axios.post("/api/active_dean", {
      deanId,
    });
    return activeAdmin.data;
  } catch (error) {
    throw error;
  }
}
