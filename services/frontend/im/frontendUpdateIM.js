import axios from "axios";

export default async function frontendUpdateIM(
  id,
  { title, type, authors, serialNumber, status }
) {
  try {
    const iM = await axios.put(`/api/im/${id}`, {
      title,
      type,
      authors,
      serialNumber,
      status,
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
