import readSeniors from "@/services/api/senior/readSeniors";

export default async function getSeniorsHandler(req, res) {
  const { limit, page } = req.query;

  const seniors = await readSeniors({
    limit: parseInt(limit),
    page: parseInt(page),
  });
  return res.status(200).json(seniors);
}
