import userAbility from "@/services/abilities/defineAbility";
import createActiveFaculty from "@/services/api/active_faculty/createActiveFaculty";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveFacultyHandler(req, res) {
  const user = await getServerUser(req, res);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;

      const activeFaculty = await createActiveFaculty({
        facultyId,
        ability: await userAbility(user),
      });

      return res.status(201).json(activeFaculty);
    },
    action: "create",
    subject: "ActiveFaculty",
    fields: undefined,
    type: "ActiveFaculty",
  });
}
