import userAbility from "@/services/abilities/defineAbility";
import readAnnouncement from "@/services/api/announcement/readAnnouncement";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getAnnouncementHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const announcement = await readAnnouncement({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(announcement);
}
