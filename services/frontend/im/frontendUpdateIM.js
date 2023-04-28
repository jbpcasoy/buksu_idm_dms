import axios from "axios";

export default async function frontendUpdateIM(
  id,
  { title, type, authors, serialNumber }
) {
  try {
    const iM = await axios.put(`/api/im/${id}`, {
      title,
      type,
      authors,
      serialNumber,
    });
    return iM.data;
  } catch (error) {
    throw error;
  }
}
