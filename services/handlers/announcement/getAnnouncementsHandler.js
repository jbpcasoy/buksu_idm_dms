import userAbility from "@/services/abilities/defineAbility";
import readAnnouncements from "@/services/api/announcement/readAnnouncements";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getAnnouncementsHandler(req, res) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const announcements = await readAnnouncements({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });

  return res.status(200).json(announcements);
}
