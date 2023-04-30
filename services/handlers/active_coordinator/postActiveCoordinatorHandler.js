import createActiveCoordinator from "@/services/api/active_coordinator/createActiveCoordinator";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveCoordinatorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { coordinatorId } = req.body;

      const activeCoordinator = await createActiveCoordinator({
        coordinatorId,
      });
      return res.status(201).json(activeCoordinator);
    },
    action: "create",
    subject: "ActiveCoordinator",
    fields: undefined,
    type: "ActiveCoordinator",
  });
}
