import axios from "axios";

export default async function frontendUpdateActiveFile(id, { fileId }) {
  try {
    const activeFile = await axios.put(`/api/active_file/${id}`, {
      fileId,
    });

    return activeFile.data;
  } catch (error) {
    throw error;
  }
}
