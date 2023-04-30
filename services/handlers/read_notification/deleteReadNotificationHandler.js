import userAbility from "@/services/abilities/defineAbility";
import deleteReadNotification from "@/services/api/read_notification/deleteReadNotification";
import readReadNotification from "@/services/api/read_notification/readReadNotification";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function deleteReadNotificationHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);
  const readNotification = await readReadNotification({
    id,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deletedReadNotification = await deleteReadNotification(id);
      return res.status(200).json(deletedReadNotification);
    },
    action: "delete",
    subject: subject("ReadNotification", readNotification),
    fields: undefined,
    type: "ReadNotification",
  });
}
