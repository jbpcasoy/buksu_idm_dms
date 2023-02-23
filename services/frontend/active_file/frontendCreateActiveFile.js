import axios from "axios";

export default async function frontendCreateActiveFile({ iMId, fileId }) {
  try {
    const activeFile = await axios.post("/api/active_file", {
      iMId,
      fileId,
    });
    return activeFile;
  } catch (error) {
    throw error;
  }
}
