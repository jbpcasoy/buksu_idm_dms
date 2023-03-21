import axios from "axios";

export default async function frontendReadUsers({
  limit,
  page,
  name,
  email,
  sortColumn,
  sortOrder,
}) {
  try {
    const users = await axios.get("/api/user", {
      params: {
        limit,
        page,
        name,
        email,
        sortColumn,
        sortOrder,
      },
    });

    return users.data;
  } catch (error) {
    throw error;
  }
}
