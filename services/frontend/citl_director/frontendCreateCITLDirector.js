import axios from "axios";

export default async function frontendCreateCITLDirector({ userId }) {
  try {
    const cITLDirector = await axios.post("/api/citl_director", {
      userId,
    });
    return cITLDirector.data;
  } catch (error) {
    throw error;
  }
}
