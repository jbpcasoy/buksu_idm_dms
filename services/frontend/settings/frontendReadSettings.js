import axios from "axios";

export default async function frontendReadSettings() {
  try {
    const settings = await axios.get("/api/settings");

    return settings.data;
  } catch (error) {
    console.error(error);
  }
}
