import userAbility from "@/services/abilities/defineAbility";
import readIMEvents from "@/services/api/im_event/readIMEvents";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMEventsHandler(req, res) {
  const { limit, page, iMId, facultyId } = req.query;
  const user = await getServerUser(req, res);

  const iMEvents = await readIMEvents({
    limit: parseInt(limit),
    page: parseInt(page),
    iMId,
    facultyId,
    ability: await userAbility(user),
  });
  return res.status(200).json(iMEvents);
}
