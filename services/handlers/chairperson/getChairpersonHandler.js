import readChairperson from "@/services/api/chairperson/readChairperson";

export default async function getChairpersonHandler(req, res) {
  const { id } = req.query;

  const chairperson = await readChairperson(id);
  return res.status(200).json(chairperson);
}
