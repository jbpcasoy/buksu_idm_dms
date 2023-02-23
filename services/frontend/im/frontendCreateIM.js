import axios from "axios";

export default async function frontendCreateIM({ title, serialNumber }) {
  try {
    const res = await axios.post("/api/im", {
      title,
      serialNumber,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
