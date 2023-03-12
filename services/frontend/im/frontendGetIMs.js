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
  reviewerId,
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
        reviewerId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
