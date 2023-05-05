import axios from "axios";

export default async function frontendCreateDepartment({ name, collegeId }) {
  try {
    const department = await axios.post("/api/department", {
      name,
      collegeId,
    });

    return department.data;
  } catch (error) {
    throw error;
  }
}
