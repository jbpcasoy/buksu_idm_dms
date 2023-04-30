import userAbility from "@/services/abilities/defineAbility";
import deleteAnnouncement from "@/services/api/announcement/deleteAnnouncement";
import readAnnouncement from "@/services/api/announcement/readAnnouncement";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteAnnouncementHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  async function findSubject({ id }) {
    const subject = await readAnnouncement({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const announcement = await deleteAnnouncement({ id });
      return res.status(200).json(announcement);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "Announcement",
  });
}
