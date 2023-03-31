import createActiveCITLDirector from "@/services/api/active_citl_director/createActiveCITLDirector";

export default async function postActiveCITLDirectorHandler(req, res) {
  const { cITLDirectorId } = req.body;

  const activeCITLDirector = await createActiveCITLDirector({ cITLDirectorId });
  return res.status(201).json(activeCITLDirector);
}
