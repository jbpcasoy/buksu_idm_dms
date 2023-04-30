import axios from "axios";

export default async function frontendUpdateUser(id, { name, image }) {
  try {
    const user = await axios.put(`/api/user/${id}`, {
      name,
      image,
    });
    return user.data;
  } catch (error) {
    throw error;
  }
}
