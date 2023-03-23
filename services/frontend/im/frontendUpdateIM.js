import axios from "axios";

export default async function frontendUpdateIM(id, { title, type, authors }) {
  try {
    const iM = await axios.put(`/api/im/${id}`, {
      title,
      type,
      authors,
    });
    return iM;
  } catch (error) {
    throw error;
  }
}
