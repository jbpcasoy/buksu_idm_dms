import readDeanEndorsements from "@/services/api/dean_endorsement/readDeanEndorsements";

export default async function getDeanEndorsementsHandler(req, res) {
  const { limit, page } = req.query;

  const deanEndorsements = await readDeanEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(deanEndorsements);
}
