import readChairpersons from "@/services/api/chairperson/readChairpersons";

export default async function getChairpersonsHandler(req, res) {
  const { limit, page } = req.query;

  const chairpersons = await readChairpersons({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  res.status(200).json(chairpersons);
}
