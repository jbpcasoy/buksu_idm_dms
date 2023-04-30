import userAbility from "@/services/abilities/defineAbility";
import createActiveChairperson from "@/services/api/active_chairperson/createActiveChairperson";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveChairpersonHandler(req, res) {
  const user = await getServerUser(req, res);
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { chairpersonId } = req.body;

      const chairperson = await createActiveChairperson({
        chairpersonId,
        ability: await userAbility(user),
      });

      return res.status(201).json(chairperson);
    },
    action: "create",
    subject: "ActiveChairperson",
    fields: undefined,
    type: "ActiveChairperson",
  });
}
