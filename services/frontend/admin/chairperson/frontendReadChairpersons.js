import axios from "axios";

export default async function frontendReadChairpersons({ limit, page }) {
  try {
    const chairpersons = await axios.get("/api/chairperson", {
      params: {
        limit,
        page,
      },
    });

    return chairpersons.data;
  } catch (error) {
    throw error;
  }
}
