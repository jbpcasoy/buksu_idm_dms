import createActiveCoordinator from "@/services/api/active_coordinator/createActiveCoordinator";

export default async function postActiveCoordinatorHandler(req, res) {
  const { coordinatorId } = req.body;

  const activeCoordinator = await createActiveCoordinator({
    coordinatorId,
  });
  return res.status(201).json(activeCoordinator);
}
