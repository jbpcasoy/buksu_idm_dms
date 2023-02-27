import axios from "axios";

export default async function frontendReadSeniors({
  limit,
  page,
  name,
  departmentName,
  collegeName,
}) {
  try {
    const seniors = await axios.get("/api/senior", {
      params: {
        limit,
        page,
        name,
        departmentName,
        collegeName,
      },
    });

    return seniors.data;
  } catch (error) {
    throw error;
  }
}
