import createIMDCoordinator from "@/services/api/imd_coordinator/createIMDCoordinator";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postIMDCoordinatorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { userId } = req.body;

      const iMDCoordinator = await createIMDCoordinator({ userId });
      return res.status(201).json(iMDCoordinator);
    },
    action: "create",
    subject: "IMDCoordinator",
    fields: undefined,
    type: "IMDCoordinator",
  });
}
