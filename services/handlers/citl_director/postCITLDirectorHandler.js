import createCITLDirector from "@/services/api/citl_director/createCITLDirector";

export default async function postCITLDirectorHandler(req, res) {
  const { userId } = req.body;

  const cITLDirector = await createCITLDirector({
    userId,
  });
  return res.status(201).json(cITLDirector);
}
