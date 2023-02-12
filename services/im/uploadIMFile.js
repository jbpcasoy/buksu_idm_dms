import axios from "axios";

export default async function uploadIMFile(file) {
  const formData = new FormData();
  formData.append("file", file, file.name);

  return axios
    .post("/api/im/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response.data);
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
}
