import axios from "axios";

export default async function frontendCreateIM({
  title,
  serialNumber,
  authors,
}) {
  try {
    const res = await axios.post("/api/im", {
      title,
      serialNumber,
      authors,
    });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
