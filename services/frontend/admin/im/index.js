import axios from "axios";

export default async function frontendReadIms({
  limit,
  page,
  serialNumber,
  title,
  departmentName,
  status,
}) {
  try {
    const ims = await axios.get("/api/im", {
      params: {
        limit,
        page,
        serialNumber,
        title,
        departmentName,
        status,
      },
    });

    return ims.data;
  } catch (error) {
    throw error;
  }
}
