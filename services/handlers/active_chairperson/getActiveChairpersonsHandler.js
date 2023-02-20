import readActiveChairpersons from "@/services/api/active_chairperson/readActiveChairpersons";

export default async function getActiveChairpersonsHandler(req, res) {
  const { limit, page } = req.query;

  const activeChairpersons = await readActiveChairpersons({
    limit: parseInt(limit),
    page: parseInt(page),
  });

  return res.status(200).json(activeChairpersons);
}
