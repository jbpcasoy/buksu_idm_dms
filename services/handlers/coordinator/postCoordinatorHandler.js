import createCoordinator from "@/services/api/coordinator/createCoordinator";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postCoordinatorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;

      const coordinator = await createCoordinator({ facultyId });
      return res.status(201).json(coordinator);
    },
    action: "create",
    subject: "Coordinator",
    fields: undefined,
    type: "Coordinator",
  });
}
