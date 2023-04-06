import axios from "axios";

export default async function frontendReadIMEvents({ iMId, limit, page }) {
  try {
    const iMEvents = await axios.get("/api/im_event/", {
      params: {
        iMId,
        limit,
        page,
      },
    });
    return iMEvents.data;
  } catch (error) {
    throw error;
  }
}
