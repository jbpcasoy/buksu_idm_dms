import axios from "axios";

export default async function frontendReadIms({
  limit,
  page,
  serialNumber,
  title,
  departmentName,
  status,
  sortOrder,
  sortColumn,
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
        sortOrder,
        sortColumn,
      },
    });

    return ims.data;
  } catch (error) {
    throw error;
  }
}
