import axios from "axios";

export default async function frontendReadUsers(limit, page) {
  try {
    const users = await axios.get("/api/user", {
      params: {
        limit,
        page,
      },
    });

    return users.data;
  } catch (error) {
    throw error;
  }
}
