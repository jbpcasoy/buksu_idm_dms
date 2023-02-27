import axios from "axios";

export default async function frontendCreateActiveSenior({
  seniorId,
  departmentId,
}) {
  try {
    const activeSenior = await axios.post("/api/active_senior", {
      seniorId,
      departmentId,
    });

    return activeSenior.data;
  } catch (error) {
    throw error;
  }
}
