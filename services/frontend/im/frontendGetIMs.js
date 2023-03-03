import axios from "axios";

export default async function frontendGetIMs({
  limit,
  page,
  ownerId,
  status,
  serialNumber,
  title,
  notOwnerId,
  departmentId,
}) {
  try {
    const response = await axios.get("/api/im", {
      params: {
        limit,
        page,
        ownerId,
        status,
        serialNumber,
        title,
        notOwnerId,
        departmentId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
