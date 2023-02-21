import axios from "axios";

export default async function frontendDeleteDepartment(id) {
  try {
    const department = await axios.delete(`/api/department/${id}`);

    return department.data;
  } catch (error) {
    throw error;
  }
}
