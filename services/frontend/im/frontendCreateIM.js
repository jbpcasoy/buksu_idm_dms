import axios from "axios";

export default async function frontendCreateIM({
  title,
  serialNumber,
  fileName,
  originalFileName,
}) {
  try {
    const res = await axios.post("/api/im", {
      title,
      serialNumber,
      fileName,
      originalFileName,
    });
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
