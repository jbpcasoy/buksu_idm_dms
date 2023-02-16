import readCoordinator from "@/services/api/coordinator/readCoordinator";

export default async function getCoordinatorHandler(req, res) {
  const { id } = req.query;

  const coordinator = await readCoordinator(id);
  return res.status(200).json(coordinator);
}
