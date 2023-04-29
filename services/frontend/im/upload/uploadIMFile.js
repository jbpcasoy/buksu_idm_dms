import axios from "axios";

export default async function uploadIMFile({ file, fileId }) {
  try {
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("fileId", fileId);

    const response = await axios.post("/api/upload/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
