import createActiveCoordinator from "@/services/api/active_coordinator/createActiveCoordinator";

export default async function postActiveCoordinatorHandler(req, res) {
  const { departmentId, coordinatorId } = req.body;

  const activeCoordinator = await createActiveCoordinator({
    departmentId,
    coordinatorId,
  });
  return res.status(201).json(activeCoordinator);
}
