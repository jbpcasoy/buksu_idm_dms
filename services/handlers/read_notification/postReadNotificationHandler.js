import userAbility from "@/services/abilities/defineAbility";
import readNotification from "@/services/api/notification/readNotification";
import createReadNotification from "@/services/api/read_notification/createReadNotification";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postReadNotificationHandler(req, res) {
  const { notificationId } = req.body;
  const user = await getServerUser(req, res);

  const notification = await readNotification({
    id: notificationId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const readNotification = await createReadNotification({
        notificationId,
        userId: user.id,
      });
      return res.status(201).json(readNotification);
    },
    action: "connectToReadNotification",
    subject: subject("Notification", notification),
    fields: undefined,
    type: "Notification",
  });
}
