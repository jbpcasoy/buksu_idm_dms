import axios from "axios";

export default async function frontendReadDeans({ limit, page }) {
  try {
    const deans = await axios.get("/api/dean", {
      params: {
        limit,
        page,
      },
    });

    return deans.data;
  } catch (error) {
    throw error;
  }
}
