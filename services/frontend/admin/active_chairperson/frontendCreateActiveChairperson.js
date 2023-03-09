import axios from "axios";

export default async function frontendCreateActiveChairperson({
  chairpersonId,
}) {
  try {
    const activeChairperson = await axios.post("/api/active_chairperson", {
      chairpersonId,
    });

    return activeChairperson.data;
  } catch (error) {
    throw error;
  }
}
