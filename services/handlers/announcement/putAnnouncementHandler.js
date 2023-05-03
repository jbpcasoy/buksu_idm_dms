import userAbility from "@/services/abilities/defineAbility";
import readAnnouncement from "@/services/api/announcement/readAnnouncement";
import updateAnnouncement from "@/services/api/announcement/updateAnnouncement";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putAnnouncementHandler(req, res) {
  const { id } = req.query;
  const { title, description, link } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readAnnouncement({
      id,
      ability: ability,
    });
    return subject;
  }

  const announcement = await findSubject({ id });
  const caslSubject = subject("Announcement", announcement);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) => rule.fields || ["title", "description", "link"],
  });
  const data = _.pick({ title, description, link }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const announcement = await updateAnnouncement({
        id,
        data: { title, description, link },
      });

      return res.status(200).json(announcement);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "Announcement",
  });
}
