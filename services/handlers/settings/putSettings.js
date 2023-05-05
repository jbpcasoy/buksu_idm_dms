import upsertSettings from "@/services/api/settings/upsertSettings";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function putSettings(req, res) {
  const { vpaa } = req.body;

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const settings = await upsertSettings({
        vpaa,
      });
      return res.status(200).json(settings);
    },
    action: "create",
    subject: "Settings",
    fields: undefined,
    type: "Settings",
  });
}
