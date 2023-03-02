import axios from "axios";

export default async function frontendReadFiles({
  limit,
  page,
  fileName,
  originalFileName,
  iMSerialNumber,
  active,
}) {
  try {
    const files = await axios.get("/api/file", {
      params: {
        limit,
        page,
        fileName,
        originalFileName,
        iMSerialNumber,
        active,
      },
    });

    return files.data;
  } catch (error) {
    throw error;
  }
}
