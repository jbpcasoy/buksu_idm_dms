import createFaculty from "@/services/api/faculty/createFaculty";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postFacultyHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { userId, departmentId } = req.body;

      const faculty = await createFaculty({ userId, departmentId });

      return res.status(201).json(faculty);
    },
    action: "create",
    subject: "Faculty",
    fields: undefined,
    type: "Faculty",
  });
}
