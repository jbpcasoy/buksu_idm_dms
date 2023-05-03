import createAnnouncement from "@/services/api/announcement/createAnnouncement";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postAnnouncementHandler(req, res) {
  const { title, description, link } = req.body;

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const announcement = await createAnnouncement({
        title,
        description,
        link,
      });
      return res.status(201).json(announcement);
    },
    action: "create",
    subject: "Announcement",
    fields: undefined,
    type: "Announcement",
  });
}
