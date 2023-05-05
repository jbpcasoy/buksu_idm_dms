import userAbility from "@/services/abilities/defineAbility";
import createDean from "@/services/api/dean/createDean";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postDeanHandler(req, res) {
  const user = await getServerUser(req, res);
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;

      const dean = await createDean({
        facultyId,
        ability: await userAbility(user),
      });
      return res.status(201).json(dean);
    },
    action: "create",
    subject: "Dean",
    fields: undefined,
    type: "Dean",
  });
}
