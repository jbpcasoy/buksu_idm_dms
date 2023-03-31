import readActiveCITLDirector from "@/services/api/active_citl_director/readActiveCITLDirector";

export default async function getActiveCITLDirectorHandler(req, res) {
  const { id } = req.query;

  const activeCITLDirector = await readActiveCITLDirector(id);
  return res.status(200).json(activeCITLDirector);
}
