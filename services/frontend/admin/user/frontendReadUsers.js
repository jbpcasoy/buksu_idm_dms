import axios from "axios";

export default async function frontendReadUsers({ limit, page, name }) {
  try {
    const users = await axios.get("/api/user", {
      params: {
        limit,
        page,
        name,
      },
    });

    return users.data;
  } catch (error) {
    throw error;
  }
}
