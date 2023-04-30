import createActiveIMDCoordinator from "@/services/api/active_imd_coordinator/createActiveIMDCoordinator";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveIMDCoordinatorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { iMDCoordinatorId } = req.body;

      const activeIMDCoordinator = await createActiveIMDCoordinator({
        iMDCoordinatorId,
      });
      return res.status(201).json(activeIMDCoordinator);
    },
    action: "create",
    subject: "ActiveIMDCoordinator",
    fields: undefined,
    type: "ActiveIMDCoordinator",
  });
}
