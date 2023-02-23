import axios from "axios";

export default async function frontendCreateFile({
  iMId,
  originalFileName,
  fileName,
  googleDocsUrl,
}) {
  try {
    const file = await axios.post("/api/file", {
      iMId,
      originalFileName,
      fileName,
      googleDocsUrl,
    });

    return file;
  } catch (error) {
    throw error;
  }
}
