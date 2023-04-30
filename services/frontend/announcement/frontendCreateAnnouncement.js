import axios from "axios";

export default async function frontendCreateAnnouncement({
  title,
  description,
  link,
}) {
  const announcement = await axios.post("/api/announcement", {
    title,
    description,
    link,
  });
}
