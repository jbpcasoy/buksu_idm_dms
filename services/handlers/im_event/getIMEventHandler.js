import userAbility from "@/services/abilities/defineAbility";
import readIMEvent from "@/services/api/im_event/readIMEvent";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMEventHandler(req, res) {
  const { id } = await req.query;
  const user = await getServerUser(req, res);

  const iMEvent = await readIMEvent({ id, ability: await userAbility(user) });
  return res.status(200).json(iMEvent);
}
