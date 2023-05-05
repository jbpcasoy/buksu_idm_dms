import axios from "axios";

export default async function frontendUpsertSettings({ vpaa }) {
  try {
    const settings = await axios.put("/api/settings", {
      vpaa,
    });
    return settings.data;
  } catch (error) {
    console.error(error);
  }
}
