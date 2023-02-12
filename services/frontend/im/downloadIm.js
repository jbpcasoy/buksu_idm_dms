import axios from "axios";

export default async function downloadIm(fileName) {
  try {
    const response = await axios.get(`/api/im/download/${fileName}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
