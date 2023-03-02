import axios from "axios";

export default async function frontendReadUser(id) {
  try {
    const user = await axios.get(`/api/user/${id}`);
    return user.data;
  } catch (error) {
    throw error;
  }
}
