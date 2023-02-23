import axios from "axios";

export default async function frontendCreateActiveChairperson({
  chairpersonId,
  departmentId,
}) {
  try {
    const activeChairperson = await axios.post("/api/active_chairperson", {
      chairpersonId,
      departmentId,
    });

    return activeChairperson.data;
  } catch (error) {
    throw error;
  }
}
