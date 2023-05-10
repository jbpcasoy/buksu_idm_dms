import axios from "axios";

export default async function frontendDeleteIM(id) {
  const im = await axios.delete(`/api/im/${id}`);
  return im.data;
}
