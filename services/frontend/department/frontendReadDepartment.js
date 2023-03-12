import axios from "axios";

export default async function frontendReadDepartment(id) {
  try {
    const department = await axios.get(`/api/department/${id}`);
    return department.data;
  } catch (error) {
    throw error;
  }
}
