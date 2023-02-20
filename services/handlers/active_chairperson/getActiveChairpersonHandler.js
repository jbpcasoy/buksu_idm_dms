import readActiveChairperson from "@/services/api/active_chairperson/readActiveChairperson";

export default async function getActiveChairpersonHandler(req, res) {
  const { id } = req.query;

  const activeChairperson = await readActiveChairperson(id);
  return res.status(200).json(activeChairperson);
}
