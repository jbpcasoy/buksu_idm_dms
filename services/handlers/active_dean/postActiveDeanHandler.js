import userAbility from "@/services/abilities/defineAbility";
import createActiveDean from "@/services/api/active_dean/createActiveDean";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveDeanHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { deanId } = req.body;
      const user = await getServerUser(req, res);

      const activeDean = await createActiveDean({
        deanId,
        ability: await userAbility(user),
      });
      return res.status(201).json(activeDean);
    },
    action: "create",
    subject: "ActiveDean",
    fields: undefined,
    type: "ActiveDean",
  });
}
