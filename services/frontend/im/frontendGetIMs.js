import axios from "axios";

export default async function frontendGetIMs({ limit, page }) {
  try {
    const response = await axios.get(`http://localhost:3000/api/im`, {
      params: {
        limit,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
