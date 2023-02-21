import axios from "axios";

export default async function frontendUpdateDepartment(id, { name }) {
  try {
    const department = await axios.put(`/api/department/${id}`, {
      name,
    });

    return department.data;
  } catch (error) {
    throw error;
  }
}
