import deleteCITLDirector from "@/services/api/citl_director/deleteCITLDirector";

export default async function deleteCITLDirectorHandler(req, res) {
  const { id } = req.query;

  const cITLDirector = await deleteCITLDirector(id);
  return res.status(200).json(cITLDirector);
}
