import axios from "axios";

export default async function frontendUpdateActiveFile(id, { iMId, fileId }) {
  try {
    const activeFile = await axios.put(`/api/active_file/${id}`, {
      iMId,
      fileId,
    });

    return activeFile.data;
  } catch (error) {
    throw error;
  }
}
