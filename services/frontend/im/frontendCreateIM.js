import axios from "axios";

export default async function frontendCreateIM({
  title,
  serialNumber,
  fileName,
}) {
  try {
    const res = await axios.post("/api/im", { title, serialNumber, fileName });
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
