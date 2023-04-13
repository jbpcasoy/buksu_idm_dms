import createActiveFaculty from "@/services/api/active_faculty/createActiveFaculty";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveFacultyHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;

      const activeFaculty = await createActiveFaculty({
        facultyId,
      });

      return res.status(201).json(activeFaculty);
    },
    action: "create",
    subject: "ActiveFaculty",
    fields: undefined,
    type: "ActiveFaculty",
  });
}
