import axios from "axios";

export default async function uploadIMFile(file) {
  try {
    const formData = new FormData();
    formData.append("file", file, file.name);

    const response = await axios.post("/api/im/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
