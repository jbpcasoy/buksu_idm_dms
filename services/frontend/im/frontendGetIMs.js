import axios from "axios";

export default async function frontendGetIMs({ limit, page }) {
  try {
    const response = await axios.get("/api/im", {
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
