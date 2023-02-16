import deleteChairperson from "@/services/api/chairperson/deleteChairperson";

export default async function deleteChairpersonHandler(req, res) {
  const { id } = req.query;

  const chairperson = await deleteChairperson(id);
  return res.status(200).json(chairperson);
}
