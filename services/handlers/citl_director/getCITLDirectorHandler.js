import readCITLDirector from "@/services/api/citl_director/readCITLDirector";

export default async function getCITLDirectorHandler(req, res) {
  const { id } = req.query;

  const cITLDirector = await readCITLDirector(id);
  return res.status(200).json(cITLDirector);
}
