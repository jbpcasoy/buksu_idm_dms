import createCoordinator from "@/services/api/coordinator/createCoordinator";

export default async function postCoordinatorHandler(req, res) {
  const { facultyId } = req.body;

  const coordinator = await createCoordinator({ facultyId });
  return res.status(201).json(coordinator);
}
