import axios from "axios";

export default async function frontendReadFiles({
  limit,
  page,
  fileName,
  originalFileName,
  iMSerialNumber,
  active,
  iMId,
  sortColumn,
  sortOrder,
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
        iMId,
        sortColumn,
        sortOrder,
      },
    });

    return files.data;
  } catch (error) {
    throw error;
  }
}
