import createActiveIMDCoordinator from "@/services/api/active_imd_coordinator/createActiveIMDCoordinator";

export default async function postActiveIMDCoordinatorHandler(req, res) {
  const { iMDCoordinatorId } = req.body;

  const activeIMDCoordinator = await createActiveIMDCoordinator({
    iMDCoordinatorId,
  });
  return res.status(201).json(activeIMDCoordinator);
}
