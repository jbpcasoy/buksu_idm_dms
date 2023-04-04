import readCITLDirectorEndorsements from "@/services/api/citl_director_endorsement/readCITLDirectorEndorsements";

export default async function getCITLDirectorEndorsementsHandler(req, res) {
  const { limit, page } = req.query;

  const cITLDirectorEndorsements = await readCITLDirectorEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(cITLDirectorEndorsements);
}
