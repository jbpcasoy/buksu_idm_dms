import axios from "axios";

export default async function frontendReadFile(id) {
  try {
    const file = await axios.get(`/api/file/${id}`);
    return file.data;
  } catch (error) {
    throw error;
  }
}
