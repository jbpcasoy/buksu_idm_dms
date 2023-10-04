import userAbility from "@/services/abilities/defineAbility";
import readActiveFaculty from "@/services/api/active_faculty/readActiveFaculty";
import createCoordinator from "@/services/api/coordinator/createCoordinator";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postCoordinatorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;
      const user = await getServerUser(req, res);
      const ability = await userAbility(user);

      const activeFaculty = await readActiveFaculty({
        ability,
        filter: {
          facultyId: {
            equals: facultyId,
          },
        },
      });

      const coordinator = await createCoordinator({
        facultyId: activeFaculty.facultyId,
      });
      return res.status(201).json(coordinator);
    },
    action: "create",
    subject: "Coordinator",
    fields: undefined,
    type: "Coordinator",
  });
}
