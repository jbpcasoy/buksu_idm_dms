import createActiveCoordinator from "@/services/api/active_coordinator/createActiveCoordinator";

export default async function postActiveCoordinatorHandler(req, res) {
  const { coordinatorId, departmentId } = req.body;

  const activeCoordinator = await createActiveCoordinator({
    coordinatorId,
    departmentId,
  });
  return res.status(201).json(activeCoordinator);
}
