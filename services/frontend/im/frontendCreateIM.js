import axios from "axios";

export default async function frontendCreateIM({
  title,
  serialNumber,
  authors,
  type,
}) {
  try {
    const res = await axios.post("/api/im", {
      title,
      serialNumber,
      authors,
      type,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
