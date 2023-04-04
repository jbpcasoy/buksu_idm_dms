import deleteActiveCITLDirector from "@/services/api/active_citl_director/deleteActiveCITLDirector";

export default async function deleteActiveCITLDirectorHandler(req, res) {
  const { id } = req.query;

  const activeCITLDirector = await deleteActiveCITLDirector(id);
  return res.status(200).json(activeCITLDirector);
}
