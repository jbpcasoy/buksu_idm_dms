import userAbility from "@/services/abilities/defineAbility";
import readAnnouncements from "@/services/api/announcement/readAnnouncements";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getAnnouncementsHandler(req, res) {
  const {
    limit,
    page,
    title,
    description,
    link,
    sortColumn = "title",
    sortOrder = "asc",
  } = req.query;
  const user = await getServerUser(req, res);

  const announcements = await readAnnouncements({
    limit: limit ? parseInt(limit) : undefined,
    page: page ? parseInt(page) : undefined,
    title,
    description,
    link,
    sortColumn,
    sortOrder,
    ability: await userAbility(user),
  });

  return res.status(200).json(announcements);
}
