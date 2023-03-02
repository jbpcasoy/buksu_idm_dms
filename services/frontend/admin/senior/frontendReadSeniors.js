import axios from "axios";

export default async function frontendReadSeniors({
  limit,
  page,
  name,
  departmentName,
  collegeName,
  active,
}) {
  try {
    const seniors = await axios.get("/api/senior", {
      params: {
        limit,
        page,
        name,
        departmentName,
        collegeName,
        active,
      },
    });

    return seniors.data;
  } catch (error) {
    throw error;
  }
}
