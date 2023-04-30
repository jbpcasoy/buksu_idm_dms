import axios from "axios";

export default async function frontendReadChairpersons({
  limit,
  page,
  name,
  email,
  departmentName,
  collegeName,
  active,
  sortColumn,
  sortOrder,
}) {
  try {
    const chairpersons = await axios.get("/api/chairperson", {
      params: {
        limit,
        page,
        email,
        name,
        departmentName,
        collegeName,
        active,
        sortColumn,
        sortOrder,
      },
    });

    return chairpersons.data;
  } catch (error) {
    throw error;
  }
}
