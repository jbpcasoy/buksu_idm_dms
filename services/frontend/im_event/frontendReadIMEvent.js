import axios from "axios";

export default async function frontendReadIMEvent(id) {
  try {
    const iMEvent = await axios.get(`/api/im_event/${id}`);
    return iMEvent.data;
  } catch (error) {
    throw error;
  }
}
