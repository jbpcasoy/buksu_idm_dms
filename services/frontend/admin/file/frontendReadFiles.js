import axios from "axios";

export default async function frontendReadFiles({
  limit,
  page,
  fileName,
  originalFileName,
  iMSerialNumber,
}) {
  try {
    const files = await axios.get("/api/file", {
      params: {
        limit,
        page,
        fileName,
        originalFileName,
        iMSerialNumber,
      },
    });

    return files.data;
  } catch (error) {
    throw error;
  }
}
