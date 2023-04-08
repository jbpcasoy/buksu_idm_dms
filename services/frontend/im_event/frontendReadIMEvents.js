import axios from "axios";

export default async function frontendReadIMEvents({
  facultyId,
  iMId,
  limit,
  page,
}) {
  try {
    const iMEvents = await axios.get("/api/im_event/", {
      params: { facultyId, iMId, limit, page },
    });
    return iMEvents.data;
  } catch (error) {
    throw error;
  }
}
